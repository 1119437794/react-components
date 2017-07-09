/*
 * @component SimpleUpload 简易上传组件
 * @author yxc
 *
 * @props { String } uploadUrl	  文件上传地址
 * @props { Function } onChange	  文件上传回调函数，参数服务器返回的数据
 *
 * eg：
 <SimpleUpload
    uploadUrl="upload.do"
    onChange={(data) => console.log(data)}
 />
 * */

import React, { Component } from "react"
import "./SimpleUpload.css"

class SimpleUpload extends Component {

    // 上传表单dom
    inputFormDom = null

    // 上传控件dom
    inputFileDom = null

    render(){
        return (
            <div className="simple-upload" onClick={() => this.inputFileDom.click()}>
                <iframe name="fileUpload" ref="input-iframe"></iframe>
                <form action={this.props.uploadUrl} method="post" ref="input-form" target="fileUpload" encType="multipart/form-data">
                    <input type="file" ref="input-file" accept="image/gif, image/jpeg, image/jpg, image/png" onChange={() => this.inputFormDom.submit()}/>
                </form>
            </div>
        )
    }

    componentDidMount(){

        this.inputFormDom = this.refs["input-form"];
        this.inputFileDom = this.refs["input-file"];

        // iframe 添加onload事件
        let onChange = this.props.onChange;
        this.refs["input-iframe"].onload = function () {
            onChange(this.contentWindow.document.body.innerHTML)
        }
    }
}

export default SimpleUpload;