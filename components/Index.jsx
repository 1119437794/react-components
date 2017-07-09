import React, { Component }from "react"
import AutoComplete from "./Component-higgs4.0/AutoComplete/AutoComplete"

import Mock from "mockjs"
import "./Component-higgs4.0/style/Index.scss"

import CircleBillGraph from "./Component-higgs4.0/CircleBillGraph/CircleBillGraph"
import Collapse from "./Component-higgs4.0/Collapse/Collapse"
import Notification from "./Component-higgs4.0/Notification/Notification"
import Pagination from "./Component-higgs4.0/Pagination/Pagination"
import SimpleUpload from "./Component-higgs4.0/SimpleUpload/SimpleUpload"
import Slider from "./Component-higgs4.0/Slider/Slider"
import DateComponent from "./Component-higgs4.0/Date/DateComponent"
import TwoDate from "./Component-higgs4.0/TwoDate/TwoDate"

class Index extends Component {

    state = {
        dataSource: [],

        notification: {
            message: "",
            description: ""
        },

        Pagination: {
            curPageNum: 2,
            rowsTotal: 90
        },

        Slider: {
            curVal: 4
        },

        year: 2000,
        month: 10,
        day: 20,
        val: 1000
    }

    constructor () {
        super()
        console.time()
    }


    render(){
        let _str = []
        for (let  i = 0; i < this.state.val; i ++) {
            _str.push(<li key={i}>{i}</li>)
        }

        return (
            <div>
                <div className="component-container">
                    <h1 className="component-title">自动完成组件</h1>
                    <AutoComplete
                        dataSource={this.state.dataSource}
                        onChange={(text, flag) => {

                            let data = [];
                            if(text && flag){
                                data = Mock.mock({
                                    'list|1-10': [{
                                        'id|+1': 1
                                    }]
                                }).list.map(item => `含有关键词${text}的条目${item.id}`);
                            }

                            this.setState({ dataSource: data });
                        }
                        }
                    />
                </div>

                <div className="component-container">
                    <h1 className="component-title">圆形账单组件</h1>
                    <CircleBillGraph
                    option={
                    {
                        value: Mock.mock({
                            'data|0-100': 100
                        }).data + "%",
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
                </div>

                <div className="component-container">
                    <h1 className="component-title">折叠面板组件</h1>
                    <Collapse
                        isOnlyOneTab={true}
                        dataSource={[
                            {"title": "面板1","content": "A dog is a type of households across the world."},
                            {"title": "面板2","content": "A dog is a type of households across the world."},
                            {"title": "面板3","content": "A dog is a type of households across the world."}
                        ]}
                        onChange={(data) => {console.log(data)}}
                    />
                </div>

                <div className="component-container">
                    <h1 className="component-title">通知组件</h1>
                    <Notification
                        duration="6000"
                        message={this.state.notification.message}
                        description={this.state.notification.description}
                    />
                    <button className="btn" onClick={() => {
                        let data = Mock.mock({
                            'id|1-100': 1
                        });
                        this.setState({
                            notification: {
                                message: `通知标题${data.id}`,
                                description: `通知内容${data.id}`,
                            }
                        })
                    }}>通知</button>
                </div>

                <div className="component-container">
                    <h1 className="component-title">分页组件</h1>
                    <Pagination
                        showPages={5}
                        curPageNum={this.state.Pagination.curPageNum}
                        rowsTotal={this.state.Pagination.rowsTotal}
                        pageSizeOptions={[10, 20, 30]}
                        onChange={ curPageNum => this.setState({
                            Pagination: {
                                curPageNum: curPageNum,
                                rowsTotal: 90
                            }
                        })}
                        onShowSizeChange={ pageSize => console.log(pageSize) }
                    />
                </div>

                <div className="component-container">
                    <h1 className="component-title">简单上传组件</h1>
                    <SimpleUpload
                        uploadUrl="upload.do"
                        onChange={(data) => console.log(data)}
                    />
                </div>

                <div className="component-container">
                    <h1 className="component-title">滑块组件</h1>
                    <Slider
                        min={0}
                        max={8}
                        curVal={this.state.Slider.curVal}
                        isShowCurVal={true}
                        beforeDrag={() => {console.log("滑块拖动之前")}}
                        startDrag={(val) => {
                            this.setState({
                                Slider: { curVal : val }
                            });
                            console.log("当前滑块的位置值", val)}}
                        afterDrag={() => {console.log("滑块拖动结束")}}
                    />
                </div>

                <div className="component-container">
                    <h1 className="component-title">日期组件</h1>
                    <DateComponent
                        year={this.state.year}
                        month={this.state.month}
                        day={this.state.day}
                        showYearNum={9}
                        callback={(y, m, d)=>{
                            this.setState({
                                year: y,
                                month: m,
                                day: d
                            });

                            console.log(y + "," + m + "," +d)
                        }}
                    />
                </div>

                <div className="component-container">
                    <h1 className="component-title">日期组件</h1>
                    <TwoDate
                        callback={(date1, date2) => console.log(date1, date2)}
                    />
                </div>

            </div>
        )
    }

    componentDidMount () {
        console.timeEnd()
    }

}
export default Index;

