/*
 * @component AutoComplete 自动完成
 * @author yxc
 *
 * @props { Function } onChange	    输入框内容变化时回调函数，
 *                                      第一个参数为text，表示输入框内容，
 *                                      第二个参数为flag，默认true，表示用户输入的内容，false表示用户点击或回车选择的下拉项，不用再去请求dataSource
 * @props { Array    } dataSource	下拉列表项数据
 *
 * eg：
 <AutoComplete
    onChange={(text, flag) => {console.log(text, flag)}
    dataSource={this.state.dataSource}/>
 * */

import React, { Component } from "react"
import "./AutoComplete.scss"

class AutoComplete extends Component {

    // 自动完成输入框dom对象，避免重复获取
    autocompleteInputDom = null

    /*
    * @method { Function } [onChange=null] 对传入的onChange函数重写
    * 加入对state重置功能
     * */
    onChange = null

    state = {

        // 下拉列表当前选中项的下标
        curListItemIndex: 0,

        // 显示隐藏下拉列表项，用于点击选择某个列表项时，隐藏列表项
        isShowList: true
    }

    /*
    * @method { Function } clickSelectItem 下拉列表项点击选择
    * */
    clickSelectItem(e){
        this.autocompleteInputDom.value = e.target.textContent;
        this.onChange(this.autocompleteInputDom.value, false);
    }

    componentWillMount(){
        this.onChange = (text, flag = true) => {
            this.props.onChange(text, flag);
            if(flag){
                this.setState({ isShowList: true});
                this.setState({ curListItemIndex: 0});
            }else {
                this.setState({ isShowList: false});
            }
        }
    }

    render(){

        let onChange = this.onChange;
        let dataSource = this.props.dataSource;
        let listContainerClassName = dataSource.length && this.state.isShowList ? "autocomplete-list" : "autocomplete-list autocomplete-no-list";

        return (
            <div className="autocomplete">

                {/* 输入框 */}
                <input type="text"
                       ref="autocomplete-input"
                       className="autocomplete-input"
                       onFocus={() => onChange(this.autocompleteInputDom.value)}
                       onChange={() => onChange(this.autocompleteInputDom.value)}
                />

                {/* 下拉列表项 */}
                <ul className={listContainerClassName}>
                    {
                        dataSource.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={(e) => {this.clickSelectItem(e)}}
                                    className={this.state.curListItemIndex == index ? "active" : ""}
                                >{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    componentDidMount(){

        // 当用户键入上下键时 可以选择下拉列表项
        this.autocompleteInputDom = this.refs["autocomplete-input"];
        this.autocompleteInputDom.onkeydown = (e) => {

            let keyCode = e.keyCode;
            let curListItemIndex = this.state.curListItemIndex;
            let maxListItemIndex = this.props.dataSource.length - 1;

            switch (keyCode){
                case 38:
                    this.setState({
                        curListItemIndex: curListItemIndex > 0 ? curListItemIndex - 1 : 0
                    });
                    return false;

                case 40:
                    this.setState({
                        curListItemIndex: curListItemIndex >= maxListItemIndex ? maxListItemIndex : curListItemIndex + 1
                    });
                    return false;

                case 13:
                    // 回车选择下拉列表项
                    this.autocompleteInputDom.value = this.props.dataSource[this.state.curListItemIndex] || "";
                    this.onChange(this.autocompleteInputDom.value, false);
                    break;
            }
        }

        // 点击其他地方时关闭
        // todo 拒绝JQ
        let autocomplete = document.querySelector(".autocomplete");
        document.body.addEventListener("click", (e) => {

            let tmpTarget = e.target;
            for(let i=0 ; 1; i++){

                if(!tmpTarget){
                    this.setState({
                        isShowList : false
                    });
                    break;

                }else {
                    if(autocomplete == tmpTarget){
                        break;
                    }else {
                        tmpTarget = tmpTarget.parentNode;
                    }
                }
            }
        });
    }
}

export default AutoComplete;