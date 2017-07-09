/*
 * @component CircleBillGraph 圆形账单图表组件
 * @author yxc
 *
 * @props { Object }  option  图标配置，配置项包括
 *                            value -- 账单值，百分比值
 *                            radius -- 图表半径
 *                            borderWidth -- 图表边框宽度
 *                            borderColor -- 图表边框颜色
 *                            circleBgColor -- 图表圆形背景颜色
 *                            valueBgColor -- 图表有效值部分背景颜色
 *                            leftWaveColor -- 图表有效值部分左波浪背景颜色
 *                            rightWaveColor -- 图表有效值部分右波浪背景颜色
 *
 * eg：
 <CircleBillGraph
 option={
     {
         value: "30%",
         radius: 100,
         borderWidth: 8,
         borderColor: "#AAF1E9",
         circleBgColor: "#E3F6F4",
         valueBgColor: "#4DD4C3",
         leftWaveColor: "#72DCD0",
         rightWaveColor: "#8EE4D9"
     }
   }
 />
 * */

import React, { Component } from "react"
import "./CircleBillGraph.scss"

class CircleBillGraph extends Component {

    state = {
        canvasWidth: 0,
        canvasHeight: 0,
    }

    // 绘制正弦，使用的是sin三角函数 暂时不用
    drawSinGrah(ctx, radius, value, centerX, centerY, fillStyle, reverse){

        let halfChord = Math.sqrt(Math.pow(radius, 2) - Math.pow(Math.abs(value - radius), 2)); // 半弦
        let sinStartX = centerX - halfChord; // 正弦起点x坐标
        let sinStartY = centerY + radius -value; // 正弦起点y坐标
        let sinXStep = 2 * halfChord / 100; // 绘制正弦步进

        ctx.beginPath();
        //ctx.lineWidth = 1;
        ctx.fillStyle = fillStyle;
        ctx.moveTo(sinStartX, sinStartY);

        let tmpSinX = sinStartX;
        let tmpSinY = 0;
        let amplitude = reverse ? -5 : 5;
        for(let i=0;i<100;i++){

            tmpSinX = tmpSinX + sinXStep;
            tmpSinY = amplitude * Math.sin((tmpSinX - centerX) * Math.PI / halfChord) + sinStartY;
            ctx.lineTo(tmpSinX, tmpSinY);
        }

        return halfChord;
    }

    render(){

        return (
            <div className="circle-bill-graph" ref="circle-bill-graph">
                <canvas
                    ref="circle-bill-canvas"
                    width={this.state.canvasWidth}
                    height={this.state.canvasHeight}
                />
            </div>
        )
    }

    componentDidMount(){

        // 设置canvas的宽高
        let circleBillGraphDom = this.refs["circle-bill-graph"];
        let circleBillGraphDomStyle = getComputedStyle(circleBillGraphDom, null);

        this.setState({
            canvasWidth: Number.parseFloat(circleBillGraphDomStyle.height),
            canvasHeight: Number.parseFloat(circleBillGraphDomStyle.width)
        })
    }

    componentDidUpdate(){

        // 绘制图形
        let circleBillCanvasDom = this.refs["circle-bill-canvas"];
        let ctx = circleBillCanvasDom.getContext("2d");

        let radius = this.props.option.radius; // 半径
        let centerX = this.state.canvasWidth * 0.5; // 圆心x坐标
        let centerY = this.state.canvasHeight * 0.5; // 圆心y坐标
        let borderWidth = this.props.option.borderWidth; // 圆形边框宽度
        let borderColor = this.props.option.borderColor;// 圆形边框颜色
        let circleBgColor = this.props.option.circleBgColor; // 圆形背景颜色
        let valueBgColor = this.props.option.valueBgColor; // 有效值部分背景颜色
        let leftWaveColor = this.props.option.leftWaveColor; // 有效值部分左波浪背景颜色
        let rightWaveColor = this.props.option.rightWaveColor; // 有效值部分右波浪背景颜色
        let tmpValue = Number.parseFloat(this.props.option.value); // 账单百分比值 字符串型
        let value = tmpValue * radius * 2 / 100; // 账单绝对值

        // 1. 绘制圆形
        ctx.beginPath();
        ctx.lineWidth = borderWidth;
        ctx.strokeStyle = borderColor;
        ctx.fillStyle = circleBgColor;
        ctx.arc(centerX, centerY, radius, 0, Math.PI*2);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        // 2. 绘制正弦 【使用贝塞尔曲线绘制】
        let halfChord = Math.sqrt(Math.pow(radius, 2) - Math.pow(Math.abs(value - radius), 2)); // 半弦
        let sinStartX = centerX - halfChord; // 正弦起点x坐标
        let sinMidX = centerX; // 正弦中点x坐标
        let sinEndX = centerX + halfChord; // 正弦终点x坐标
        let sinStartY = centerY + radius -value; // 正弦起点y坐标

        ctx.beginPath();
        ctx.fillStyle = valueBgColor;
        ctx.moveTo(sinStartX, sinStartY);
        ctx.quadraticCurveTo(sinStartX + halfChord /2 , sinStartY + 10, sinMidX, sinStartY);
        ctx.quadraticCurveTo(centerX + halfChord /2 , sinStartY - 10, sinEndX, sinStartY);

        // 3. 半圆
        let tmpSemicircleAngle = Math.asin(halfChord / radius);
        let semicircleStartAngle = 0;
        let semicircleEndAngle = 0;

        if(tmpValue > 50){
           semicircleStartAngle = tmpSemicircleAngle - Math.PI / 2;
           semicircleEndAngle = 3 * Math.PI / 2 - tmpSemicircleAngle;

        }else {
           semicircleStartAngle = Math.PI / 2 - tmpSemicircleAngle;
           semicircleEndAngle = Math.PI / 2 + tmpSemicircleAngle;
        }

        ctx.arc(centerX, centerY, radius, semicircleStartAngle, semicircleEndAngle);
        ctx.closePath();
        ctx.fill();

        // 4. 绘制8型
        ctx.beginPath();
        ctx.fillStyle = leftWaveColor;
        ctx.moveTo(sinStartX, sinStartY);
        ctx.quadraticCurveTo(sinStartX + halfChord /2 , sinStartY + 10, sinMidX, sinStartY);
        ctx.quadraticCurveTo(sinStartX + halfChord /2 , sinStartY - 10, sinStartX, sinStartY);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = rightWaveColor;
        ctx.moveTo(centerX, sinStartY);
        ctx.quadraticCurveTo(centerX + halfChord /2 , sinStartY - 10, sinEndX, sinStartY);
        ctx.quadraticCurveTo(centerX + halfChord /2 , sinStartY + 10, centerX, sinStartY);
        ctx.closePath();
        ctx.fill();
    }
}

export default  CircleBillGraph;