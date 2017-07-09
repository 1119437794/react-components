import React, { Component } from 'react'
import './CheckBoxs.scss'

class CheckBoxs extends Component {
    constructor () {
        super();

        this.state = {
            list: [], // 所有选择项
            stateArr: [] // 所有复选框选中状态
        }

        /*
        * 点击选择某一项
        * @params index { Object } 某一项下标
        * */
        this.selectItem = (e, index) =>  {
            let { list, stateArr } = this.state;
            const checkState = e.target.checked;
            const isAllSeleted = this.props.isAllSeleted;

            if (!index && isAllSeleted) {
                // 能支持全选
                stateArr = new Array(list.length).fill(checkState)
            } else {
                stateArr[index] = checkState;

                // 检测如果有全选按钮，是否满足全选状态
                if (isAllSeleted) {
                    const tmpStateArr = [...stateArr]
                    tmpStateArr.shift()

                    if (tmpStateArr.some(item => !item)) {
                        stateArr[0] = false
                    } else {
                        stateArr[0] = true
                    }
                }
            }

            this.setState({ stateArr });
        }
    }

    render () {
        const { state } =this;

        return (
            <ul className="checks_root">
                {
                    state.list.map((item, index) => {
                        const htmlFor = `checks_input${index}`; // 设置label 与 input 关联id

                        return (
                            <li key={index} >
                                <label
                                    className="checks_label"
                                    htmlFor={htmlFor}
                                >
                                    <input
                                        type="checkbox"
                                        className="checks_input"
                                        id={htmlFor}
                                        checked={state.stateArr[index]} // 这里只能bool值 也是满坑的
                                        onChange={(e) => this.selectItem(e, index)}
                                    />
                                    <span className="checks_name">{item}</span>
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    componentDidMount () {
        const { list, isAllSeleted } = this.props;
        let tmpList = list;

        if (isAllSeleted) {
            // 是否全选
            tmpList = ['全选'].concat(list);
        }

        this.setState({
            list: tmpList,
            stateArr: new Array(tmpList.length).fill(false)
        });
    }

}

export default CheckBoxs