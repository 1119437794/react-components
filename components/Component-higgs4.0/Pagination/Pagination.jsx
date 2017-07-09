/*
* @component Pagination 分页组件
* @author yxc
*
* @props {Number}   curPageNum	                     当前页数
* @props {Number}   rowsTotal	                     数据总数
* @props {Function} onChange	                     页码改变的回调，参数是改变后的页码
* @props {Array}    [pageSizeOptions=[10, 20, 30]]	 指定每页可以显示多少条
* @props {Function} onShowSizeChange	             pageSize 变化的回调，参数是pageSize
*
* eg：
 <Pagination
    showPages={this.state.showPages}
    curPageNum={this.state.curPageNum}
    rowsTotal={this.state.rowsTotal}
    pageSizeOptions={[10, 20, 30]}
    onChange={ curPageNum => this.setState({curPageNum: curPageNum})}
    onShowSizeChange={ pageSize => console.log(pageSize) }
 />
* */

import React, { Component }from "react"
import "./Pagination.scss"

class Pagination extends Component {

    // 页码输入框dom，避免重复获取
    pageInputDom = null;

    // 每页多少条记录，pageSize
    pageSize = 0

    state = {
        testColor: 'red'
    }

    setColor (e) {
        this.setState({
            testColor: 'green'
        })
        // e.target.style.color = 'blue'
    }

    /*
     * @method { Function } getPagesList 获取页码列表
     * @param { Number } curPageNum 当前页码
     * @param { Number } showPages 当前组件显示多少页码
     * @param { Number } pagesTotal 总的页码数
     * @return { Array } pagesList 页码列表
     * 注：页码每一项是一个对象，value表示用户点击获取的真实页码值，text表示页码展示给用户的值
     * */
    getPagesList(curPageNum, showPages, pagesTotal){

        // 没有传入总共页码数 或 总共页码数小于1，就没必要显示页码
        if(pagesTotal < 1 || !pagesTotal) return [];

        // 始终保持当前页码位于中间位置
        let pagesList = []; // 页码列表

        /*
         * 针对供用户选择的页码数 大于总的后台返回的页码
         * 那就只显示，1 -- pagesTotal
         * */
        if(showPages > pagesTotal){
            for(let i = 1; i <= pagesTotal; i++){
                pagesList.push({value: i, text: i});
            }

        }else {
            let leftPageNum = Math.floor(showPages / 2); // 当前页码左边应该有多少页码
            let rightPageNum = Math.ceil(showPages / 2); // 当前页码右边应该有多少页码

            // 左边不足的页码数
            let leftShortPageNum = leftPageNum - curPageNum + 1;
            leftShortPageNum = leftShortPageNum > 0 ? leftShortPageNum : 0;

            // 右边不足的页码数
            let tmpRightMaxPageNum = curPageNum + rightPageNum; // 临时获取当前页码右边可能的最大页码
            let rightShortPageNum = pagesTotal - tmpRightMaxPageNum;
            rightShortPageNum = rightShortPageNum > 0 ? 0 : -(rightShortPageNum);

            // 获取当前页码的左边页码
            if(!leftShortPageNum){
                // 左边有足够的页码，并注意将右边不足的页码在左边补足
                let leftStartPageNum = curPageNum - leftPageNum - rightShortPageNum;
                leftStartPageNum = leftStartPageNum > 0 ? leftStartPageNum : 1;
                for (let i = leftStartPageNum; i<= curPageNum; i++){
                    pagesList.push({value: i, text: i});
                }

            }else {
                // 左边没有足够的页码
                for (let i = 1; i <= curPageNum; i++){
                    pagesList.push({value: i, text: i});
                }
            }

            // 获取当前页码的右边页码
            if(!rightShortPageNum){
                // 右边有足够的页码，并注意将左边不足的页码在右边补足
                for (let i = curPageNum + 1; i< curPageNum + leftShortPageNum + rightPageNum; i++){
                    pagesList.push({value: i, text: i});
                }
            }else {
                // 右边没有足够的页码
                for (let i = curPageNum + 1; i <= pagesTotal; i++){
                    pagesList.push({value: i, text: i});
                }
            }

        }

        // 当前不为第一页，那就应该有上一页页码， 同理下一页
        if(curPageNum != 1){
            pagesList.unshift({value: curPageNum - 1, text: "<"});
        }
        if(curPageNum != pagesTotal){
            pagesList.push({value: curPageNum + 1, text: ">"});
        }

        // 如果当前页大于showPages 说明可以有左边可以有...
        // 如果当前页小于pagesTotal-showPages 说明可以有右边可以有...
        if(curPageNum > showPages){
            pagesList.splice(1, 0, {value: curPageNum - showPages, text: "..."});
        }
        if(curPageNum < pagesTotal - showPages){
            let len = pagesList.length;
            pagesList.splice(len - 1, 0, {value: curPageNum + showPages, text: "..."});
        }

        return pagesList;
    }

    /*
     * @method { Function } fixPageInputInRange 输入页码验证，保证必须在1和页码最大值之间
     * @param { Number } inputPageNum 用户输入的页码数
     * @param { Number } pagesTotal 总的页码数
     * @return { Number }tmpInputPageNum 修正过后的用户输入页码
     * */
    fixPageInputInRange(inputPageNum, pagesTotal){

        let tmpInputPageNum = "";

        if(inputPageNum !== ""){

            let inputPageNumtoNumber = +inputPageNum;

            if(inputPageNumtoNumber < 1){
                tmpInputPageNum = 1;

            }else if(inputPageNumtoNumber > pagesTotal){
                tmpInputPageNum = pagesTotal;

            }else {
                tmpInputPageNum = inputPageNumtoNumber;
            }
        }

        return tmpInputPageNum;
    }

    /*
     * @method { Function } pageInputHandleKeyDown 页码输入框keydown事件
     * @param { Object } pageInputDom 页码输入框dom
     * @param { Function } onChange 键入回车时调用，页码变化回调函数
     * */
    pageInputHandleKeyDown(pageInputDom, onChange){

        pageInputDom.onkeydown = function (e) {

            let keyCode = e.keyCode;
            let inputPageNum = +pageInputDom.value;
            if(keyCode == 13 && inputPageNum){
                // 当用户输入enter且输入enter之前输入页码框有 有效的页码数值
                onChange(inputPageNum);
                pageInputDom.value = "";

            }else {
                return (keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105 || keyCode == 8) ?　true : false;
            }
        }
    }

    /*
    * @method { Function } selectPageSize 选择每页显示多少条记录
    * */
    selectPageSize(e, onShowSizeChange, onChange){
        let pageSize = e.target.value;

        this.pageSize = +pageSize;
        onShowSizeChange(+pageSize);
        onChange(1);
    }

    componentWillMount(){

        // 获取pageSize
        this.pageSize = this.props.pageSizeOptions[0];
    }

    render(){

        let showPages = this.props.showPages;
        let curPageNum = this.props.curPageNum;
        let rowsTotal = this.props.rowsTotal;
        let onChange = this.props.onChange;
        let pageSizeOptions = this.props.pageSizeOptions;
        let onShowSizeChange = this.props.onShowSizeChange;
        let pagesTotal = Math.ceil(rowsTotal / this.pageSize);

        if(!rowsTotal) return null;

        return (
            <div className="pagination">

                {/*选择每页显示多少条记录*/}
                <select className="pagination-page-size" onChange={(e) => this.selectPageSize(e, onShowSizeChange, onChange)}>
                    {
                        pageSizeOptions.map((item, index) => {
                            return (
                                <option key={index} value={item}>{item} / page</option>
                            )
                        })
                    }
                </select>

                {/* 总计多少条数据 */}
                <div className="pagination-row-total">共&nbsp;{rowsTotal}&nbsp;条</div>

                {/* 页码展示 */}
                <ul className="pagination-page-list">
                    {
                        this.getPagesList(curPageNum, showPages, pagesTotal).map((item, index) => {

                            let text = item.text;
                            let value = item.value;

                            return (
                                <li
                                    key={index}
                                    value={value}
                                    className={text == curPageNum ? "active" : ""}
                                    onClick={() => this.setColor}
                                >{text}</li>
                            )
                        })
                    }
                </ul>

                {/* 总计多少页 */}
                <div className="pagination-page-total">共&nbsp;{pagesTotal}&nbsp;页</div>

                {/* 输入页码，跳转到输入页码 */}
                <div className="pagination-page-input">
                    跳转到&nbsp;<input type="text" ref="page-input" onChange={
                        () => this.pageInputDom.value = this.fixPageInputInRange(this.pageInputDom.value, pagesTotal)}/>
                </div>
            </div>
        )

    }

    componentDidMount(){

        this.pageInputDom = this.refs["page-input"];
        this.pageInputDom && this.pageInputHandleKeyDown(this.pageInputDom, this.props.onChange);
    }

    componentDidUpdate(){

        // 没有获取到，重新获取
        if(!this.pageInputDom){
            this.pageInputDom = this.refs["page-input"];
            this.pageInputDom && this.pageInputHandleKeyDown(this.pageInputDom, this.props.onChange);
        }
    }
}

export default Pagination;