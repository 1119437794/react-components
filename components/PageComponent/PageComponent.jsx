/*
 * @component PageComponent 分页组件
 * @Function 上下页选择
 *           某一页选择
 *           输入页码跳转
 *
 * @props { Number } pagesTotal 总共有多少页码 @required
 * @props { Function } callback 组件回调函数 @required
 * @props { Number } showPages 一次只显示多少页码供用户点击
 * @props { Number } forceUpdatePage 强制将curPageNum置为1
 *
 * @author yxc
 * @QQ 1119437794
 * */

import { observable } from "mobx"
import { observer } from "mobx-react"
import React, { Component }from "react"
import "./PageComponent.scss"

@observer
class PageComponent extends Component {

    /*
     * @property { Number } curPageNum 当前页码
     * */
    curPageNum = observable(1)

    /*
     * @property { Object } inputPageNumDom 输入页码框的dom对象，
     * 避免重复获取
     * */
    inputPageNumDom = null

    /*
     * @property { Number } [showPages=5] 可以显示多少个页码
     * 避免重复判断
     * */
    showPages = 5

    /*
     * @method { Function } selectPageNum 点击选择页码
     * @param { Number } curPageNum 当前用户选择的页码
     * */
    selectPageNum(curPageNum){

        // 当前页码发生变化
        if(curPageNum != this.curPageNum.get()){

            // 若是点击的上一页 或 下一页，需要特殊处理
            if (curPageNum == "上一页"){
                this.curPageNum.set(this.curPageNum.get() - 1);
            }else if(curPageNum == "下一页"){
                this.curPageNum.set(this.curPageNum.get() + 1);
            }else {
                this.curPageNum.set(curPageNum);
            }

            // 调用回调函数，通知该组件调用者页码发生变化了
            this.props.callback(this.curPageNum.get());
        }
    }

    /*
     * pure function
     * @method { Function } getPagesList 获取页码列表
     * @param { Number } pagesTotal 总的页码数
     * @return { Array } pagesList 页码列表
     * */
    getPagesList(pagesTotal){

        // 没有传入总共页码数 或 总共页码数小于1，就没必要显示页码
        if(pagesTotal <= 1 || !pagesTotal) return [];

        // 始终保持当前页码位于中间位置
        let pagesList = []; // 页码列表
        let curPageNum = this.curPageNum.get(); // 当前页码
        let leftPageNum = Math.floor(this.showPages / 2); // 当前页码左边应该有多少页码
        let rightPageNum = Math.ceil(this.showPages / 2); // 当前页码右边应该有多少页码

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
            for (let i = curPageNum - leftPageNum - rightShortPageNum; i<= curPageNum; i++){
                pagesList.push(i);
            }
        }else {
            // 左边没有足够的页码
            for (let i = 1; i <= curPageNum; i++){
                pagesList.push(i);
            }
        }

        // 获取当前页码的右边页码
        if(!rightShortPageNum){
            // 右边有足够的页码，并注意将左边不足的页码在右边补足
            for (let i = curPageNum + 1; i< curPageNum + leftShortPageNum + rightPageNum; i++){
                pagesList.push(i);
            }
        }else {
            // 右边没有足够的页码
            for (let i = curPageNum + 1; i <= pagesTotal; i++){
                pagesList.push(i);
            }
        }

        // 当前不为第一页，那就应该有上一页页码， 同理下一页
        if(curPageNum != 1){
            pagesList.unshift("上一页");
        }
        if(curPageNum != pagesTotal){
            pagesList.push("下一页");
        }

        return pagesList;
    }

    /*
     * @method { Function } isNumberInputPageNum 输入页码验证，保证必须输入数字
     * 只允许输入数字
     * */
    isNumberInputPageNum(e) {

        let keyCode = e.keyCode;
        let tmpInputPageNum = this.inputPageNumDom.value;

        if(keyCode == 13 && tmpInputPageNum){

            // 当用户输入enter且输入enter之前输入页码框有 有效的页码数值
            this.jumpToInputPage();
        }else {

            if (keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105 || keyCode == 8) {
                return true;
            }else {
                return false;
            }
        }
    }

    /*
     * @method { Function } checkInputPageNumInRange 输入页码验证，保证必须在1和页码最大值之间
     * */
    checkInputPageNumInRange(){

        let tmpInputPageNum = this.inputPageNumDom.value;
        let tmpPagesTotal = this.props.pagesTotal;

        // 针对用户删除操作时，可以将输入框置为空
        if(tmpInputPageNum !== ""){

            if(+tmpInputPageNum < 1){
                tmpInputPageNum = 1;
            }else if(+tmpInputPageNum > tmpPagesTotal){
                tmpInputPageNum = tmpPagesTotal;
            }
        }

        this.inputPageNumDom.value = tmpInputPageNum;
    }

    /*
     * @method { Function } jumpToInputPage 跳转到用户输入的页码
     * */
    jumpToInputPage(){

        let tmpInputPageNum = +this.inputPageNumDom.value;

        // 必须是有效的数字才跳转
        if(tmpInputPageNum){

            // 输入的页码不为当前页码，才render
            if(tmpInputPageNum != this.curPageNum.get()){

                this.curPageNum.set(tmpInputPageNum);

                // 调用回调函数，通知该组件调用者页码发生变化了
                this.props.callback(this.curPageNum.get());
            }

            this.inputPageNumDom.value = ""; // 跳转后清空输入
        }
    }


    componentWillMount(){

        this.props.showPages && (this.showPages = this.props.showPages);
    }

    render(){

        let pagesList = this.getPagesList(this.props.pagesTotal);

        if( !pagesList.length ) return null;

        return (
            <div className="page-component">

                {/* 当前页分页页码显示 */}
                <ul className="page-component-pages">
                    {
                        pagesList.map((item, index) => {

                            let className = "";
                            if(item == "上一页" || item == "下一页"){
                                className = "prev-next";
                            }else if (this.curPageNum.get() == item){
                                className = "active";
                            }

                            return (
                                <li
                                    key={ index }
                                    className={ className }
                                    onClick={ () => this.selectPageNum(item)}
                                >{ item }</li>
                            );
                        })
                    }
                </ul>

                {/* 后台返回有多少页数据 */}
                <div className="page-component-total">共{this.props.pagesTotal}页</div>

                {/* 当前页输入页码跳转 */}
                <div className="page-component-input-to">
                    <div>
                        {/* 控制输入 */}
                        第<input type="text" ref="inputPageNum" onChange={(e) => this.checkInputPageNumInRange(e)}/>页
                    </div>
                    <button onClick={() => this.jumpToInputPage()}>跳转</button>
                </div>
            </div>
        );
    }

    componentDidMount(){

        this.inputPageNumDom = this.refs.inputPageNum; // 存储输入页码框dom

        /*
         * 监听用户输入是否为数字
         * todo 此处必须通过这样方式处理
         * 注 因为没有页码时，获取的inputPageNumDom为null
         * */
        this.inputPageNumDom && (this.inputPageNumDom.onkeydown = this.isNumberInputPageNum.bind(this));
    }

    componentWillReceiveProps(nextProps){

        // 强制更新页码，并将当前页码置为1
        if(nextProps.forceUpdatePage != this.props.forceUpdatePage){
            this.curPageNum.set(1);
        }

        // 针对在总页码数发生变化，以及在componentDidMount没有获取到inputPageNumDom时，重新赋值
        if(!this.inputPageNumDom && nextProps.pagesTotal > this.showPages){
            this.inputPageNumDom = this.refs.inputPageNum;
        }
    }
}

export default PageComponent;