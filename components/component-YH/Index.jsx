import React, { Component } from "react"

import './index.css'
import menu from './Tree/menu'

import AutoComplete from './AutoComplete/AutoComplete'
import CheckBoxs from './CheckBoxs/CheckBoxs'
import Tree from './Tree/Tree'
import Upload from './Upload/Upload'

class Index extends Component {

    constructor () {
        super();

        this.dataSource = ['数据1', '数据2', '数据3', '数据11']
        this.state = {
            dataSource: [],

            checks: ['选择0', '选择1', '选择3']
        }

        this.autoChange = val => {
            let tmpData = []
            if (val) {
                tmpData = this.dataSource.filter(item => item.includes(val))
            }
            this.setState({
                dataSource: tmpData
            })
        }

        this.autoSelect = index => {
            console.log(this.state.dataSource[index])
        }

        this.checkSelect = indexArr => {
            console.log(indexArr)
        }

        this.selectItem = item => {
            console.log(item)
        }

        this.uploadChange = filename => {
            console.log('filename', filename)
        }

        this.submit = filesObj => {
            console.log(filesObj)
        }

        this.complete = msg => {
            console.log('msg', msg);
        }
    }

    render () {
        return (
            <div>
                <AutoComplete
                    list={this.state.dataSource} // 列表项数据
                    change={this.autoChange} // 输入内容变化回调
                    select={this.autoSelect} // 点击选择回调
                />

                <CheckBoxs
                    isAllSeleted={true} // 是否支持全选
                    list={this.state.checks} // 列表项数据
                    select={this.checkSelect} // 点击选择回调
                />

                <Tree
                    list={menu} // 菜单列表
                    select={this.selectItem} // 点击菜单项回调
                />

                <Upload
                    serverUrl="http://plutus.bbdfinance.com/indexes/batchUpload" // 上传地址
                    // isImmediate={false} // 是否立即上传
                    change={this.uploadChange} // 选择文件后回调
                    submit={this.submit} // 提交上传文件
                    complete={this.complete} // 上传完毕
                />
            </div>
        )
}
}

export default Index