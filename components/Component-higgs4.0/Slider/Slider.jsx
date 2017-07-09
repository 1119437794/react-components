/*
 * @component Slider 滑块组件
 * @author yxc
 *
 * @props { Number }        min             滑块拖动最小值
 * @props { Number }        max             滑块拖动最大值
 * @props { Number }        curVal          滑块当前值
 * @props { Boolean }       isShowCurVal    是否显示当前滑块位置的值
 * @props { Function }      beforeDrag	    滑块拖动前回调
 * @props { Function }      startDrag	    滑块拖动中回调，参数为当前滑块位置值
 * @props { Function }      afterDrag	    滑块拖动结束回调
 *
 * eg：
 <Slider
    min={0}
    max={8}
    curVal={this.state.curVal}
    isShowCurVal={true}
    beforeDrag={() => {console.log("滑块拖动之前")}}
    startDrag={(val) => {this.setState({curVal : val}); console.log("当前滑块的位置值", val)}}
    afterDrag={() => {console.log("滑块拖动结束")}}
 />
 * */

import React, { Component } from "react"
import "./Slider.css"

class Slider extends Component {

    // 滑块容器的宽度，即是滑块可移动范围最大值
    // 避免重复获取
    sliderDomWidth = 0

    // 滑动块的宽度
    dragDivDomWidth = 0

    state = {
        // 滑块滑动轨迹的宽度
        rangeTrackWidth: 0
    }

    /*
    * @method { Function } setRangeTrackWidth 根据当前滑块值设置滑动轨迹的宽度
    * @param { Number } curVal 滑块当前显示值
    * */
    setRangeTrackWidth(curVal){
        let min = this.props.min;
        let max = this.props.max;
        let curValRatio = curVal / (max - min);

        switch (true){
            case max < min:
                throw new Error("hi gay，Slider不合法的min，max参数"); break;

            case curVal < min:
                curValRatio = 0; break;

            case curVal > max:
                curValRatio = 1; break;

            default:
                break;
        }

        this.setState({
            rangeTrackWidth: Math.round(this.sliderDomWidth * curValRatio) - this.dragDivDomWidth /2
        })
    }

    render(){

        // 判断是否需要在拖动过程中显示当前值
        let isShowCurVal = this.props.isShowCurVal != undefined ? this.props.isShowCurVal : false;

        return (
            <div className="slider" ref="slider">

                {/* 滑动轨迹 */}
                <div className="slider-track" style={{width: this.state.rangeTrackWidth + this.dragDivDomWidth/2}}></div>

                {/* 滑块 */}
                <div ref="slider-handle" className="slider-handle" style={{transform: `translateX(${this.state.rangeTrackWidth}px)`}}>

                    {/* 滑块当前值 */}
                    <span ref="slider-handle-value" className="slider-handle-value" style={{display: isShowCurVal ? "block" : "none"}}>{this.props.curVal}</span>
                </div>
            </div>
        )
    }

    componentDidMount(){

        let docDom = document.documentElement;

        let dragDivDom = this.refs["slider-handle"];
        let sliderValueDom = this.refs["slider-handle-value"];

        let dragDivDomRect = dragDivDom.getBoundingClientRect();
        let dragDivDomLeft = dragDivDomRect.left;

        // 滑块容器的宽度，即是滑块可移动范围最大值
        let sliderDom = this.refs["slider"];
        this.sliderDomWidth = Number.parseFloat(getComputedStyle(sliderDom, null).width);

        // 获取dragDivDom的宽度，用于矫正滑动过程的位置显示
        this.dragDivDomWidth = Number.parseFloat(getComputedStyle(dragDivDom, null).width);

        // 设置滑动轨迹的宽度
        this.setRangeTrackWidth(this.props.curVal);

        dragDivDom.onmousedown = (e) => {

            // 1.拖拽前
            let offsetX = e.offsetX; // 获取鼠标相对拖拽元素的位置
            this.props.beforeDrag(); // 开始拖动滑块调用回调
            docDom.onselectstart = function () { return false }; // 阻止文本选中

            // 2. 拖拽中
            docDom.onmousemove = (e) => {

                let curRangeVal = 0; // 当前滑块显示值
                let pageX = e.pageX; // 鼠标当前位置的x坐标
                let moveX = pageX-dragDivDomLeft-offsetX; // 计算当前滑块x的坐标值

                if(moveX < 0){
                    // 向左移出滑动范围，就显示最小值
                    curRangeVal = this.props.min;

                }else if(moveX >= 0 && moveX <= this.sliderDomWidth){
                    curRangeVal = Math.round(moveX / this.sliderDomWidth * (this.props.max - this.props.min));

                }else {
                    // 向右移出滑动范围，就显示最大值
                    curRangeVal = this.props.max;
                }

                // 滑块开始拖动了，触发回调
                if(curRangeVal != this.props.curVal) return this.props.startDrag(curRangeVal);

                // 在拖动过程中，保持silderValueDom的透明度为 1，避免opacity为0
                sliderValueDom.style.opacity = 1;
            }

            // 3. 拖拽结束
            docDom.onmouseup = () => {

                // 注销docDom上的事件监听
                docDom.onmouseup = null;
                docDom.onmousemove = null;

                // 滑块拖动结束触发回调
                this.props.afterDrag();

                // 拖动完毕，移除style属性，交给css来控制sliderValueDom的opacity
                sliderValueDom.removeAttribute("style");
            }
        }
    }

    componentWillReceiveProps(nextProps){

        // 设置滑动轨迹的宽度
        this.setRangeTrackWidth(nextProps.curVal);
    }
}
export default Slider;

