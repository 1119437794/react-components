/*
 * @component Drag 简易上传组件
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
import "./Drag.scss"

class Drag extends Component {

    render(){
        return (
            <div className="drag-div">
                <div className="drag-div-1">1</div>
                <div className="drag-div-2" ref="drag-div-2">2</div>
                <div style={{height: "20px"}}>3</div>
            </div>
        )
    }

    componentDidMount(){

        let dragDivDom = this.refs["drag-div-2"];
        let docDom = document.documentElement;
        let dragDivDomRect = dragDivDom.getBoundingClientRect();
        let dragDivDomTop = dragDivDomRect.top;
        let dragDivDomLeft = dragDivDomRect.left;

        // 1.拖拽前
        dragDivDom.onmousedown = function (e) {

            // 获取鼠标相对拖拽元素的位置
            let offsetX = e.offsetX;
            let offsetY = e.offsetY;
            docDom.onselectstart = function () { return false };


            // 2. 拖拽中
            docDom.onmousemove = function (e) {

                let pageX = e.pageX;
                let pageY = e.pageY;
                dragDivDom.style.transform = "translate("+ (pageX-dragDivDomLeft-offsetX)+"px," + (pageY-dragDivDomTop-offsetY) + "px)";
                dragDivDom.style["-ms-transform"] = "translate("+ (pageX-dragDivDomLeft-offsetX)+"px," + (pageY-dragDivDomTop-offsetY) + "px)";
            }

            // 3. 拖拽结束
            docDom.onmouseup = function () {
                docDom.onmouseup = null;
                docDom.onmousemove = null;
            }
        }
    }
}

export default Drag;