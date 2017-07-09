import React, { Component } from "react"
import './Upload.scss'

class Upload extends Component {
    static defaultProps = {
        accept: '*', // 支持上传文件类型
        multiple: true, // 是否支持多选
        isImmediate: true // 是否立即上传
    }

    constructor () {
        super ();

        this.allFiles = {} // 被选择上传的所有文件

        // 是否是IE9
        this.isIE9 = (() => {
            // 这个组件只针对 IE9+ 所以 若是IE浏览器时，版本默认就是9 或 9+
            const navigator = window.navigator;
            const appName = navigator.appName;
            const appVersion  = navigator.appVersion;
            return appName === 'Microsoft Internet Explorer' && /MSIE9\.0/.test(appVersion);
        })();

        /*
        * 选择文件回调
        * @params e { Obj } 事件对象
        * */
        this.selectFile = (e) => {
            const { change, isImmediate } = this.props;
            let files = [...e.target.files]; // 将类数组转成数组
            files.map(item => this.allFiles[item.name] = item); // 去重处理
            change(Object.keys(this.allFiles));

            if (isImmediate) {
                // 用户选择文件 立即上传
                this.submit()
            }
        }
    }

    render () {

        const {
            accept,
            multiple,
            serverUrl,
            isImmediate
        } = this.props;

        return (
            <div className="upload_root">
                <iframe
                    name="upload_iframe"
                    className="upload_iframe"
                    ref={iframe => this.iframeDom = iframe}
                ></iframe>

                <form
                    method="post"
                    action={serverUrl}
                    target="upload_iframe"
                    className="upload_form"
                    encType="multipart/form-data"
                    ref={form => this.formDom = form}
                >
                    <label
                        className="upload_label"
                        htmlFor="upload_input"
                    >
                        <span className="upload_name">选择文件</span>
                        <input
                            type="file"
                            id="upload_input"
                            accept={accept}
                            multiple={multiple}
                            className="upload_input"
                            onChange={this.selectFile}
                        />
                    </label>
                </form>

                {
                    isImmediate ? null : <button className="upload_submit" onClick={this.submit}>点击提交</button>
                }
            </div>
        )
    }

    componentDidMount () {
        /*
         * 点击提交上传
         * 惰性载入处理
         * */
        this.submit = (() => {
            if (this.isIE9) {
                return () => this.formDom.submit();
            }

            return () => {
                const fd = new FormData();
                const allFiles = this.allFiles;
                for (let i in allFiles) {
                    fd.append(i, allFiles[i]);
                }
                this.props.submit(fd);
            }
        })();

        /*
        * 针对IE9上传完毕后回调
        * iframe 跨域通信会报错
        * */
        const complete = this.props.complete;
        this.iframeDom.onload = function() {
            complete(this.contentWindow.document.body.innerHTML);
        }
    }
}

export default Upload;