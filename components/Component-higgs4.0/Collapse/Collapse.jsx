/*
 * @component Collapse 折叠面板组件
 * @author yxc
 *
 * @props { Boolean }   [isOnlyOneTab=false]    是否只允许打开一个tab，默认可以全部打开
 * @props { Array }     dataSource	            面板数据
 * @props { Function }  onChange                面板切换回调，参数为该点击的面板的数据，可选
 *
 * eg：
 <Collapse
    isOnlyOneTab={true}
    dataSource={[
       {"title": "面板1","content": "A dog is a type of households across the world."},
       {"title": "面板2","content": "A dog is a type of households across the world."},
       {"title": "面板3","content": "A dog is a type of households across the world."}
    ]}
    onChange={(data) => {console.log(data)}}
 />
 * */

import React, { Component } from "react"
import "./Collapse.css"

class Collapse extends Component {

    // 所有的面板内容区的height值
    allCollapseContentHeight = [];

    // 面板数据源的长度 避免重复获取
    dataSourceLen = 0

    state = {

        // 面板标题的状态
        collapseTitleStatus: [],

        // 面板内容的高度
        collapseContentHeight: [],
    }

    /*
    * @method { Function }      点击切换展开与收起
    * @param { Number } index   点击的面板的下标
    * @param { Object } data    点击的面板的数据，用于回调
    * */
    handleClick(index, data){

        let collapseTitleStatus = this.state.collapseTitleStatus;
        let collapseContentHeight = this.state.collapseContentHeight;

        let curClassName = collapseTitleStatus[index]; //当前点击的面板标题的className
        let nextTmpHeight = ""; // 当前点击的面板的下一个状态的height值
        let nextTmpClassName = "";// 当前点击的面板的下一个状态的className

        if(curClassName.indexOf("unfold") > -1){
            // 收起
            nextTmpHeight = 0;
            nextTmpClassName = curClassName.replace("unfold", "fold");

        }else {
            // 展开
            nextTmpHeight = this.allCollapseContentHeight[index];
            nextTmpClassName = curClassName.replace("fold", "unfold");
        }

        // 展开唯一tab
        if(this.props.isOnlyOneTab){
            collapseContentHeight = new Array(this.dataSourceLen).fill(0);
            collapseTitleStatus = new Array(this.dataSourceLen).fill("fold");

            collapseContentHeight.splice(index, 1, nextTmpHeight);
            collapseTitleStatus.splice(index, 1, nextTmpClassName);

        }else {
            collapseContentHeight[index] = nextTmpHeight;
            collapseTitleStatus[index] = nextTmpClassName;
        }

        this.setState({
            collapseTitleStatus: collapseTitleStatus,
            collapseContentHeight: collapseContentHeight
        })

        // 调用回调函数
        this.props.onChange && this.props.onChange(data);
    }

    componentWillMount(){

        // 根据数据源的长度，填充collapseTitleStatus collapseContentHeight
        // 避免render时获取不到值而报错
        this.dataSourceLen = this.props.dataSource.length;

        this.setState({
            collapseTitleStatus: new Array(this.dataSourceLen).fill(""),
            collapseContentHeight: new Array(this.dataSourceLen).fill("auto"),
        })
    }

    render(){

        return (
            <div className="collapse">
                {
                    this.props.dataSource.map((item, index) => {
                        return (
                            <div key={index} className="collapse-item">

                                {/* 面板标题 */}
                                <h2
                                    onClick={() => this.handleClick(index, item)}
                                    className={`collapse-item-title ${this.state.collapseTitleStatus[index]}`}
                                >{item.title}</h2>

                                {/* 面板内容 */}
                                <div
                                    className="collapse-item-content"
                                    style={{height: this.state.collapseContentHeight[index]}}
                                >
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    componentDidMount(){

        /*
        * 首先获取collapse-item-content的高度，
        * 然后给collapse-item-title加上fold类
        * 获取高度是为了实现过渡效果
        * */
        let collapse = document.querySelector(".collapse"); // 整个面板容器
        let allCollapseContent = collapse.querySelectorAll(".collapse-item-content"); // 面板下所有内容

        for(let i=0,len=allCollapseContent.length; i<len; i++){
            this.allCollapseContentHeight.push(
                Number.parseFloat(getComputedStyle(allCollapseContent[i], null).height)
            );
        }

        this.setState({
            collapseContentHeight: new Array(this.dataSourceLen).fill(0),
            collapseTitleStatus: new Array(this.dataSourceLen).fill("fold")
        });
    }
}

export default Collapse;


