/*
 * @component Upload 上传组件
 * @author yxc
 *
 * @props { String } uploadUrl	  文件上传地址
 * @props { Function } onChange	  选择文件上传时，调用该函数，参数为文件在服务器的地址
 *
 * eg：
 <Upload
    uploadUrl="upload.do"
    onChange={(uploadedUrl) => console.log(uploadedUrl)}
 />
 *
 * todo 裁剪 拖拽
 * */

import React, { Component } from "react"
import "./Upload.scss"

class Upload extends Component {

    // 文件上传控件dom对象
    inputFileDom = null

    // 已上传文件列表下标，用于上传完毕后，修改state里的status
    uploadedListIndex = 0

    state = {

        // 已上传文件列表
        uploadedList: [],
    }

    /*
    * @method { Function } uploadToServer ajax上传至服务器
    * @param  { Blob } dataBlob 上传二进制流
    * @param  { Number } uploadedListIndex 在state中对应的下标
    * */
    uploadToServer(dataBlob, uploadedListIndex){

        let xhr = new XMLHttpRequest();

        xhr.open("POST", this.props.uploadUrl, true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.onreadystatechange = () => {

            // 模拟进度效果
            setTimeout(() => {
                let XMLHttpReq = xhr;
                if (XMLHttpReq.readyState == 4) {

                    let text = XMLHttpReq.responseText;
                    let status = 0;

                    if (XMLHttpReq.status == 200) {
                        status = 1;

                    }else {
                        status = 2;
                    }

                    // ajax请求完毕，设置对应state状态，以期render
                    let uploadedList = this.state.uploadedList;
                    uploadedList[uploadedListIndex].status = status;
                    uploadedList[uploadedListIndex].uploaded = text;

                    this.setState({
                        uploadedList: uploadedList
                    })
                }
            }, 800);
        };
        xhr.send(dataBlob);
    }

    /*
    * @method { Function } inputFileOnChange 监听input file控件onchange事件
    * */
    inputFileOnChange() {

        let fileBlob = null ;

        // 文件上传对象，包含文件信息
        let fileList = this.inputFileDom.files[0];
        let filename = fileList.name;

        // // 1. 获取上传文件二进制格式，不支持IE
        // if (window.createObjectURL != undefined) {
        //     // basic
        //     fileBlob = window.createObjectURL(fileList) ;
        //
        // } else if (window.URL != undefined) {
        //     // mozilla(firefox)
        //     fileBlob = window.URL.createObjectURL(fileList);
        //
        // } else if (window.webkitURL != undefined) {
        //     // webkit or chrome
        //     fileBlob = window.webkitURL.createObjectURL(fileList) ;
        // }

        let formData = new FormData();
        formData.append("file", fileList);

        console.log(fileBlob);
        console.log(formData);

        /*
        * 2. 上传至服务器
        * */
        this.uploadToServer(formData, this.uploadedListIndex);


        /*
        * 3. 图片预览
        * 返回的对象说明：
        *   status    表示上传状态
        *       状态码分别为：0 表示 上传中
        *                    1 表示 上传成功
        *                    2 表示 上传失败
        *   uploading 表示上传中，需要显示文件名
        *   uploaded  表示上传完毕，需要显示文件名以及图片预览
        * */

        let tmpArr = this.state.uploadedList;
        tmpArr.push({
            uploading: filename,
            uploaded: fileBlob,
            status: 0,
        });
        this.setState({
            uploadedList: tmpArr
        })

        // 4. 表示已存入一个上传列表，上传了一个文件
        this.uploadedListIndex ++;
    }

    /*
    * @method { Function } uploadingProgress 文件上传进度条
    * @param  { Object }   progressDom 进度条的dom对象
    * */
    uploadingProgress(progressDom) {

        let speed = 0;
        let times = 0; // 统计tmpProgressWidth累加次数
        let basicRatio = 10; // 速度比率
        let tmpProgressWidth = 0; // progressDom宽度变化
        let maxWidth = Math.floor((progressDom.previousSibling.clientWidth - 20) * 0.9); // progressDom最大宽度

        let timer = setInterval(() => {
            speed = Math.floor(maxWidth - tmpProgressWidth) / basicRatio;
            tmpProgressWidth += speed;
            times ++;

            if(times > 20 || tmpProgressWidth >= maxWidth) clearInterval(timer);

            progressDom.style.width = tmpProgressWidth + "px";
        }, 25);
    }

    render(){

        return (
            <div className="upload">

                {/* 上传区域 */}
                <div className="upload-area">
                    <div className="upload-area-icon">
                        <input type="file" ref="file" onChange={() => this.inputFileOnChange()} accept="image/gif, image/jpeg, image/jpg, image/png"/>
                        <img alt="" src="/imgs/upload-icon.png" onClick={() => this.inputFileDom.click()}/>
                    </div>
                    <div className="upload-area-notice">
                        <p>Click or drag file to this area to upload</p>
                        <p>Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                    </div>
                </div>

                {/* 上传文件列表 */}
                <ul className="upload-list" ref="upload-list">
                    {
                        this.state.uploadedList.map((item, index) => {

                            let status = item.status;
                            let uploading = item.uploading;
                            let uploaded = item.uploaded;

                            return (
                                <li key={index}>
                                    {
                                        status == 0 ?

                                            // 上传中
                                            <div className="upload-item-uploading">
                                                <span className="upload-item-uploading-filename">{uploading}</span>
                                                <span className="upload-item-uploading-progress" ref={`uploading-progress-${index}`}></span>
                                            </div>

                                            :

                                            // 上传完毕，成功或失败
                                            <div className="upload-item-complete">
                                                {
                                                    // 表示上传成功
                                                    status == 1 &&  <img src={uploaded} alt="" />
                                                }
                                                <span
                                                    className={status == 1 ? "upload-item-complete-filename" : "upload-item-complete-filename error"}>
                                                    {
                                                        // 上传失败
                                                        status == 1 ? uploading : `${uploading}，上传失败`
                                                    }</span>
                                                <em className="upload-item-complete-del"></em>
                                            </div>
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    componentDidMount(){

        // 获取文件上传控件dom对象
        this.inputFileDom = this.refs.file;
    }

    componentDidUpdate(){

        // 每次新上传文件，就为新render的progress调用uploadingProgress方法
        let uploadedListLastItem = this.state.uploadedList.length - 1;
        if(!this.state.uploadedList[uploadedListLastItem].status){
            this.uploadingProgress(this.refs[`uploading-progress-${uploadedListLastItem}`]);
        }
    }
}

export default Upload;