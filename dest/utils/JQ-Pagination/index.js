/*
* @component JQ版本的分页组件
* @author yxc
*
* eg:
*   $(document.getElementById("app")).getPageComponent({
        pageSizeOptions: [10, 20, 30],
        rowsTotal: 1000,
        curPageNum: 4,
        showPages: 20,
        callback: function (pageNum, pageSize) {
                console.log(pageNum);
                console.log(pageSize);
            }
        });
*
* */

;(function ($) {

    /*
     * @method { Function } _getPagesList 获取页码列表
     * @param { Number } curPageNum 当前页码
     * @param { Number } showPages 当前组件显示多少页码
     * @param { Number } pagesTotal 总的页码数
     * @return { Array } pagesList 页码列表
     * 注：页码每一项是一个对象，value表示用户点击获取的真实页码值，text表示页码展示给用户的值
     * */
    var getPagesList = function(curPageNum, showPages, pagesTotal) {

        // 没有传入总共页码数 或 总共页码数小于1，就没必要显示页码
        if(pagesTotal < 1 || !pagesTotal) return [];

        // 始终保持当前页码位于中间位置
        var pagesList = []; // 页码列表

        /*
         * 针对供用户选择的页码数 大于总的后台返回的页码
         * 那就只显示，1 -- pagesTotal
         * */
        if(showPages > pagesTotal){
            for(var i = 1; i <= pagesTotal; i++){
                pagesList.push({value: i, text: i});
            }

        }else {
            var leftPageNum = Math.floor(showPages / 2); // 当前页码左边应该有多少页码
            var rightPageNum = Math.ceil(showPages / 2); // 当前页码右边应该有多少页码

            // 左边不足的页码数
            var leftShortPageNum = leftPageNum - curPageNum + 1;
            leftShortPageNum = leftShortPageNum > 0 ? leftShortPageNum : 0;

            // 右边不足的页码数
            var tmpRightMaxPageNum = curPageNum + rightPageNum; // 临时获取当前页码右边可能的最大页码
            var rightShortPageNum = pagesTotal - tmpRightMaxPageNum;
            rightShortPageNum = rightShortPageNum > 0 ? 0 : -(rightShortPageNum);

            // 获取当前页码的左边页码
            if(!leftShortPageNum){
                // 左边有足够的页码，并注意将右边不足的页码在左边补足
                var leftStartPageNum = curPageNum - leftPageNum - rightShortPageNum;
                leftStartPageNum = leftStartPageNum > 0 ? leftStartPageNum : 1;
                for (var i = leftStartPageNum; i<= curPageNum; i++){
                    pagesList.push({value: i, text: i});
                }
            }else {
                // 左边没有足够的页码
                for (var i = 1; i <= curPageNum; i++){
                    pagesList.push({value: i, text: i});
                }
            }

            // 获取当前页码的右边页码
            if(!rightShortPageNum){
                // 右边有足够的页码，并注意将左边不足的页码在右边补足
                for (var i = curPageNum + 1; i< curPageNum + leftShortPageNum + rightPageNum; i++){
                    pagesList.push({value: i, text: i});
                }
            }else {
                // 右边没有足够的页码
                for (var i = curPageNum + 1; i <= pagesTotal; i++){
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
            var len = pagesList.length;
            pagesList.splice(len - 1, 0, {value: curPageNum + showPages, text: "..."});
        }

        return pagesList;
    }

    /*
    * 参数option包含如下字段
     *  @property { Array } pageSizeOptions -- 每页选择显示多少条记录列表值
     *  @property { Number } rowsTotal -- 总共多少条记录
     *  @property { Number } showPages -- 显示多少页码
    * */
    $.fn.getPageComponent = function (option) {

        var _this = this;
        option.curPageSize = option.curPageSize || option.pageSizeOptions[0]; // 当前页面显示多少条记录
        var pagesTotal = Math.ceil(option.rowsTotal / option.curPageSize); // 总共多少页记录
        option.curPageNum = option.curPageNum || 1; // 当前页码

        //生成选择显示多少条记录html
        var pageSizeOptions = option.pageSizeOptions.map(function(item) {

            if(item == option.curPageSize){
                return "<option value='"+ item +"' selected='selected'>"+ item +"条</option>";

            }else {
                return "<option value='"+ item +"'>"+ item +"条</option>";
            }

        }).join("");

        // 生成页码html
        var pageList = getPagesList(option.curPageNum, option.showPages, pagesTotal).map(function(item) {

               return "<li value='"+ item.value +"'" +
                   "class='"+ (item.text == option.curPageNum ? 'active pagination-page-list-item' : 'pagination-page-list-item') +"' " +
                   ">"+ item.text +"</li>";
            }).join("");

        // 完成整个组件拼接
        var _html = '<div class="pagination"> ' +
            '<select class="pagination-page-size">'+ pageSizeOptions +'</select> ' +

            '<div class="pagination-row-total">共'+ option.rowsTotal +'条</div> ' +

            '<ul class="pagination-page-list">'+ pageList +'</ul> ' +

            '<div class="pagination-page-total">共'+ pagesTotal +'页</div> ' +

            '<div class="pagination-page-input">' +
            '跳转到&nbsp;<input type="text" class="pagination-page-input-field"/> ' +
            '</div> ' +
            '</div>';

        $(this).html(_html);
        
        // 卸载绑定的函数 避免多次渲染
        $(this).off("change");
        $(this).off("click");
        $(this).off("keydown");

        // 选择每页显示多少条记录
        $(this).on("change", ".pagination-page-size", function (e) {

            option.curPageNum = 1;
            option.curPageSize = +e.target.value;
            $(_this).getPageComponent(option);
            option.callback(option.curPageNum, option.curPageSize);
        });

        // 点击页码分页
        $(this).on("click", ".pagination-page-list-item", function (e) {

            var targetVal = +e.target.value;

            if(targetVal != option.curPageNum){

                option.curPageNum = targetVal;
                $(_this).getPageComponent(option);
                option.callback(option.curPageNum, option.curPageSize);
            }
        });

        // 输入页码跳转
        $(this).on("keydown", ".pagination-page-input-field", function (e) {

            var newVal = "";
            var target = e.target;
            var targetVal = target.value;
            var keyCode = e.which;

            switch (true){

                case keyCode >= 48 && keyCode <= 57:
                    newVal = +(targetVal + (keyCode - 48));
                    newVal = newVal < 1 ? 1 : newVal;
                    newVal = newVal > pagesTotal ? pagesTotal : newVal;
                    break;

                case keyCode >= 96 && keyCode <= 105:
                    newVal = +(targetVal + (keyCode - 96));
                    newVal = newVal < 1 ? 1 : newVal;
                    newVal = newVal > pagesTotal ? pagesTotal : newVal;
                    break;

                case keyCode == 8:
                    newVal = targetVal.slice(0, -1);
                    break;

                case Boolean(keyCode == 13 && targetVal && option.curPageNum != +targetVal):

                    option.curPageNum = +targetVal;
                    $(_this).getPageComponent(option);
                    option.callback(option.curPageNum, option.curPageSize);
                    break;
            }

            target.value = newVal;
            return false;
        })
    }
})(jQuery);


