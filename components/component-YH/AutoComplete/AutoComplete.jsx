import React, { Component } from 'react'
import './AutoComplete.scss'

class AutoComplete extends Component {
    constructor () {
        super();

        this.rootDom = null; // 缓存组件根节点

        this.inputDom = null; // 缓存输入框dom节点

        this.state = {
            show: false // 列表显隐
        }

        /*
        * 输入框变化时 列表数据相应变化
        * */
        this.inputChange = () => {
            clearTimeout(this.timer); // 节流
            this.timer = setTimeout(() => {
                this.setState({
                    show: true
                })
                this.props.change(this.inputDom.value);
            }, 700);
        }

        /*
        * 点击选择某一项
        * @params index { Num } 点击选择某项的下标
        * */
        this.selectItem = (index) => {
            this.setState({
                show: false
            })
            this.inputDom.value = '' // 清空输入框
            this.props.select(index);
        }
    }

    render () {
        const { props, state } = this;
        const listClass = props.list.length && state.show ? 'auto_list' : 'auto_list auto_list-hide';

        return (
            <div
                ref={root => this.rootDom = root}
                className="auto_root"
            >

                <input
                    type="text"
                    ref={input => this.inputDom = input}
                    className="auto_input"
                    onChange={this.inputChange}
                />

                <ul className={listClass}>
                    {
                        props.list.map((item, index) => {
                            return <li
                                key={index}
                                className="auto_item"
                                onClick={() => this.selectItem(index)}
                            >{item}</li>
                        })
                    }
                </ul>

            </div>
        )
    }

    componentDidMount () {
        // 点击其他关闭下拉列表
        let isInner = false
        this.rootDom.addEventListener('click', () => { isInner = true })
        document.documentElement.addEventListener('click', () => {
            if (isInner) {
                isInner = false;
            } else {
                this.setState({
                    show: false
                })
                this.inputDom.value = '';
            }
        })
    }
}

export default AutoComplete