webpackHotUpdate(0,{

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(16), ReactMount = __webpack_require__(10), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(159);

	var _Index = __webpack_require__(299);

	var _Index2 = _interopRequireDefault(_Index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import Index from "./components/Index"

	(0, _reactDom.render)(_react2.default.createElement(_Index2.default, null), document.querySelector("#app"));

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(17); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(16), ReactMount = __webpack_require__(10), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(304);

	var _menu = __webpack_require__(311);

	var _menu2 = _interopRequireDefault(_menu);

	var _AutoComplete = __webpack_require__(301);

	var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

	var _CheckBoxs = __webpack_require__(305);

	var _CheckBoxs2 = _interopRequireDefault(_CheckBoxs);

	var _Tree = __webpack_require__(308);

	var _Tree2 = _interopRequireDefault(_Tree);

	var _Upload = __webpack_require__(313);

	var _Upload2 = _interopRequireDefault(_Upload);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Index = function (_Component) {
	    _inherits(Index, _Component);

	    function Index() {
	        _classCallCheck(this, Index);

	        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this));

	        _this.dataSource = ['数据1', '数据2', '数据3', '数据11'];
	        _this.state = {
	            dataSource: [],

	            checks: ['选择0', '选择1', '选择3']
	        };

	        _this.autoChange = function (val) {
	            var tmpData = [];
	            if (val) {
	                tmpData = _this.dataSource.filter(function (item) {
	                    return item.includes(val);
	                });
	            }
	            _this.setState({
	                dataSource: tmpData
	            });
	        };

	        _this.autoSelect = function (index) {
	            console.log(_this.state.dataSource[index]);
	        };

	        _this.checkSelect = function (indexArr) {
	            console.log(indexArr);
	        };

	        _this.uploadChange = function (e) {
	            var files = e.target.files[0];
	            console.log('files', files);
	        };
	        return _this;
	    }

	    _createClass(Index, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_AutoComplete2.default, {
	                    list: this.state.dataSource // 列表项数据
	                    , change: this.autoChange // 输入内容变化回调
	                    , select: this.autoSelect // 点击选择回调
	                }),
	                _react2.default.createElement(_CheckBoxs2.default, {
	                    isAllSeleted: true // 是否支持全选
	                    , list: this.state.checks // 列表项数据
	                    , select: this.checkSelect // 点击选择回调
	                }),
	                _react2.default.createElement(_Tree2.default, {
	                    list: _menu2.default // 菜单列表
	                }),
	                _react2.default.createElement(_Upload2.default, {
	                    onChange: this.uploadChange
	                })
	            );
	        }
	    }]);

	    return Index;
	}(_react.Component);

	exports.default = Index;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(17); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, ".auto_root {\n  position: relative;\n  width: 154px; }\n\n.auto_input {\n  width: 100%;\n  height: 26px;\n  padding: 0 10px;\n  border: 1px solid #d9d9d9;\n  font-size: 12px;\n  outline: none; }\n  .auto_input:hover {\n    border-color: #2db7f5; }\n  .auto_input:focus {\n    border-color: #2db7f5;\n    box-shadow: 0 0 2px 2px rgba(45, 183, 245, 0.3); }\n\n.auto_list {\n  position: absolute;\n  width: 100%;\n  top: 28px;\n  padding: 0 15px;\n  z-index: 100;\n  font-size: 12px;\n  border: 1px solid #2db7f5;\n  background-color: #fff; }\n  .auto_list-hide {\n    display: none; }\n\n.auto_item {\n  height: 26px;\n  line-height: 26px;\n  cursor: pointer; }\n  .auto_item:not(:last-of-type) {\n    border-bottom: 1px solid #2db7f5; }\n  .auto_item-active, .auto_item:hover {\n    color: #666666;\n    background-color: #eaf8fe; }\n", ""]);

	// exports


/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(16), ReactMount = __webpack_require__(10), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(302);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AutoComplete = function (_Component) {
	    _inherits(AutoComplete, _Component);

	    function AutoComplete() {
	        _classCallCheck(this, AutoComplete);

	        var _this = _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).call(this));

	        _this.rootDom = null; // 缓存组件根节点

	        _this.inputDom = null; // 缓存输入框dom节点

	        _this.state = {
	            show: false // 列表显隐
	        };

	        /*
	        * 输入框变化时 列表数据相应变化
	        * */
	        _this.inputChange = function () {
	            _this.setState({
	                show: true
	            });
	            _this.props.change(_this.inputDom.value);
	        };

	        /*
	        * 点击选择某一项
	        * @params index { Num } 点击选择某项的下标
	        * */
	        _this.selectItem = function (index) {
	            _this.setState({
	                show: false
	            });
	            _this.inputDom.value = ''; // 清空输入框
	            _this.props.select(index);
	        };
	        return _this;
	    }

	    _createClass(AutoComplete, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var props = this.props;
	            var state = this.state;

	            var listClass = props.list.length && state.show ? 'auto_list' : 'auto_list auto_list-hide';

	            return _react2.default.createElement(
	                'div',
	                {
	                    ref: function ref(root) {
	                        return _this2.rootDom = root;
	                    },
	                    className: 'auto_root'
	                },
	                _react2.default.createElement('input', {
	                    type: 'text',
	                    ref: function ref(input) {
	                        return _this2.inputDom = input;
	                    },
	                    className: 'auto_input',
	                    onChange: this.inputChange
	                }),
	                _react2.default.createElement(
	                    'ul',
	                    { className: listClass },
	                    props.list.map(function (item, index) {
	                        return _react2.default.createElement(
	                            'li',
	                            {
	                                key: index,
	                                className: 'auto_item',
	                                onClick: function onClick() {
	                                    return _this2.selectItem(index);
	                                }
	                            },
	                            item
	                        );
	                    })
	                )
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this3 = this;

	            // 点击其他关闭下拉列表
	            var isInner = false;
	            this.rootDom.addEventListener('click', function () {
	                isInner = true;
	            });
	            document.documentElement.addEventListener('click', function () {
	                if (isInner) {
	                    isInner = false;
	                } else {
	                    _this3.setState({
	                        show: false
	                    });
	                    _this3.inputDom.value = '';
	                }
	            });
	        }
	    }]);

	    return AutoComplete;
	}(_react.Component);

	exports.default = AutoComplete;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(17); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AutoComplete.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(300);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(300, function() {
				var newContent = __webpack_require__(300);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    user-select: none;\r\n    outline: none;\r\n    list-style: none;\r\n    box-sizing: border-box;\r\n    font-family: \"microsoft yahei\";\r\n}", ""]);

	// exports


/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(303);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(303, function() {
				var newContent = __webpack_require__(303);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(16), ReactMount = __webpack_require__(10), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(307);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CheckBoxs = function (_Component) {
	    _inherits(CheckBoxs, _Component);

	    function CheckBoxs() {
	        _classCallCheck(this, CheckBoxs);

	        var _this = _possibleConstructorReturn(this, (CheckBoxs.__proto__ || Object.getPrototypeOf(CheckBoxs)).call(this));

	        _this.state = {
	            list: [], // 所有选择项
	            stateArr: [] // 所有复选框选中状态
	        };

	        /*
	        * 点击选择某一项
	        * @params index { Object } 某一项下标
	        * */
	        _this.selectItem = function (e, index) {
	            var _this$state = _this.state;
	            var list = _this$state.list;
	            var stateArr = _this$state.stateArr;

	            var checkState = e.target.checked;
	            var isAllSeleted = _this.props.isAllSeleted;

	            if (!index && isAllSeleted) {
	                // 能支持全选
	                stateArr = new Array(list.length).fill(checkState);
	            } else {
	                stateArr[index] = checkState;

	                // 检测如果有全选按钮，是否满足全选状态
	                if (isAllSeleted) {
	                    var tmpStateArr = [].concat(_toConsumableArray(stateArr));
	                    tmpStateArr.shift();

	                    if (tmpStateArr.some(function (item) {
	                        return !item;
	                    })) {
	                        stateArr[0] = false;
	                    } else {
	                        stateArr[0] = true;
	                    }
	                }
	            }

	            _this.setState({ stateArr: stateArr });
	        };
	        return _this;
	    }

	    _createClass(CheckBoxs, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var state = this.state;


	            return _react2.default.createElement(
	                'ul',
	                { className: 'checks_root' },
	                state.list.map(function (item, index) {
	                    var htmlFor = 'checks_input' + index; // 设置label 与 input 关联id

	                    return _react2.default.createElement(
	                        'li',
	                        { key: index },
	                        _react2.default.createElement(
	                            'label',
	                            {
	                                className: 'checks_label',
	                                htmlFor: htmlFor
	                            },
	                            _react2.default.createElement('input', {
	                                type: 'checkbox',
	                                className: 'checks_input',
	                                id: htmlFor,
	                                checked: state.stateArr[index] // 这里只能bool值 也是满坑的
	                                , onChange: function onChange(e) {
	                                    return _this2.selectItem(e, index);
	                                }
	                            }),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'checks_name' },
	                                item
	                            )
	                        )
	                    );
	                })
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _props = this.props;
	            var list = _props.list;
	            var isAllSeleted = _props.isAllSeleted;

	            var tmpList = list;

	            if (isAllSeleted) {
	                // 是否全选
	                tmpList = ['全选'].concat(list);
	            }

	            this.setState({
	                list: tmpList,
	                stateArr: new Array(tmpList.length).fill(false)
	            });
	        }
	    }]);

	    return CheckBoxs;
	}(_react.Component);

	exports.default = CheckBoxs;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(17); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CheckBoxs.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, ".checks_root {\n  width: 200px;\n  height: 500px;\n  border: 1px solid gray;\n  overflow: auto;\n  font-size: 13px; }\n\n.checks_label {\n  position: relative;\n  display: block;\n  height: 26px;\n  line-height: 26px;\n  padding-left: 30px;\n  border-bottom: 1px solid #7f7f7f;\n  cursor: pointer; }\n\n.checks_input {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%); }\n", ""]);

	// exports


/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(306);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(306, function() {
				var newContent = __webpack_require__(306);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(16), ReactMount = __webpack_require__(10), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(310);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tree = (_temp = _class = function (_Component) {
	    _inherits(Tree, _Component);

	    function Tree() {
	        _classCallCheck(this, Tree);

	        var _this = _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this));

	        _this.state = {
	            childShowArr: [] // 子菜单显隐
	        };

	        /*
	        * 点击展开子组件
	        * @params index { Num } 点击的菜单项下标
	        * @params flag { Bool } 递归组件显隐状态
	        * */
	        _this.showChild = function (index, flag) {
	            var tmpArr = [];
	            tmpArr[index] = flag;
	            _this.setState({
	                childShowArr: tmpArr
	            });
	        };
	        return _this;
	    }

	    _createClass(Tree, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var list = _props.list;
	            var className = _props.className;


	            if (!list) return null; // 递归结束

	            var That = this.constructor; // 自我组件
	            var childShowArr = this.state.childShowArr; // 子组件显隐

	            return _react2.default.createElement(
	                'div',
	                { className: className },
	                _react2.default.createElement(
	                    'ul',
	                    { className: 'tree_list' },
	                    list.map(function (item, index) {
	                        var childClass = childShowArr[index] ? 'tree_rootChild' : 'tree_rootChild-hide';

	                        return _react2.default.createElement(
	                            'li',
	                            {
	                                className: 'tree_item',
	                                key: index,
	                                onMouseEnter: function onMouseEnter() {
	                                    return _this2.showChild(index, true);
	                                },
	                                onMouseLeave: function onMouseLeave() {
	                                    return _this2.showChild(index, false);
	                                }
	                            },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'tree_name' },
	                                item.name
	                            ),
	                            _react2.default.createElement(That, {
	                                list: item.childList,
	                                className: childClass
	                            })
	                        );
	                    })
	                )
	            );
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(next) {
	            /*
	            * 这里主要针对 组件隐藏时 递归调用组件也必须隐藏
	            * */
	            var nextClass = next.className;
	            if (this.props.className !== nextClass && nextClass === 'tree_rootChild-hide') {
	                this.setState({
	                    childShowArr: []
	                });
	            }
	        }
	    }]);

	    return Tree;
	}(_react.Component), _class.defaultProps = {
	    className: 'tree_root' // 菜单根组件样式
	}, _temp);
	exports.default = Tree;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(17); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Tree.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, ".tree_root, .tree_rootChild {\n  width: 150px;\n  font-size: 12px; }\n\n.tree_rootChild {\n  position: absolute;\n  left: 100%;\n  top: 50%; }\n  .tree_rootChild-hide {\n    display: none; }\n\n.tree_list {\n  border: 1px solid gray;\n  border-radius: 4px; }\n\n.tree_item {\n  position: relative;\n  height: 26px;\n  line-height: 26px;\n  padding: 0 10px; }\n  .tree_item:not(:last-of-type) {\n    border-bottom: 1px solid gray; }\n", ""]);

	// exports


/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(309);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(309, function() {
				var newContent = __webpack_require__(309);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(16), ReactMount = __webpack_require__(10), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var menuData = [{
	  "childList": [{
	    "childList": [{
	      "childList": [{
	        "childList": "",
	        "id": 4,
	        "name": "四级菜单"
	      }],
	      "id": 3,
	      "name": "三级菜单0"
	    }],
	    "id": 2,
	    "name": "二级菜单0"
	  }],
	  "id": 1,
	  "name": "一级菜单0"
	}, {
	  "childList": [{
	    "childList": [{
	      "childList": [{
	        "childList": "",
	        "id": 4,
	        "name": "四级菜单"
	      }],
	      "id": 5,
	      "name": "三级菜单1"
	    }],
	    "id": 9,
	    "name": "二级菜单1"
	  }],
	  "id": 30,
	  "name": "一级菜单1"
	}, {
	  "childList": [{
	    "childList": [{
	      "childList": [{
	        "childList": "",
	        "id": 4,
	        "name": "四级菜单"
	      }],
	      "id": 7,
	      "name": "三级菜单2"
	    }],
	    "id": 16,
	    "name": "二级菜单2"
	  }],
	  "id": 59,
	  "name": "一级菜单2"
	}, {
	  "childList": [{
	    "childList": [{
	      "childList": [{
	        "childList": "",
	        "id": 4,
	        "name": "四级菜单"
	      }],
	      "id": 3,
	      "name": "三级菜单0"
	    }],
	    "id": 23,
	    "name": "二级菜单3"
	  }],
	  "id": 88,
	  "name": "一级菜单3"
	}];

	exports.default = menuData;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(17); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "menu.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, ".upload_root {\n  display: inline-block; }\n\n.upload_label {\n  position: relative;\n  display: block;\n  padding: 10px;\n  border-radius: 4px;\n  border: 1px solid gray;\n  cursor: pointer;\n  font-size: 14px;\n  text-align: center; }\n\n.upload_input {\n  position: absolute;\n  width: 0;\n  height: 0;\n  z-index: -1; }\n", ""]);

	// exports


/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(16), ReactMount = __webpack_require__(10), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(314);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Upload = (_temp = _class = function (_Component) {
	    _inherits(Upload, _Component);

	    function Upload() {
	        _classCallCheck(this, Upload);

	        return _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this));
	    }

	    _createClass(Upload, [{
	        key: 'render',
	        value: function render() {

	            return _react2.default.createElement(
	                'div',
	                { className: 'upload_root' },
	                _react2.default.createElement('iframe', { name: 'upload_iframe' }),
	                _react2.default.createElement(
	                    'form',
	                    {
	                        action: '/',
	                        method: 'post',
	                        target: 'upload_iframe',
	                        encType: 'multipart/form-data'
	                    },
	                    _react2.default.createElement(
	                        'label',
	                        {
	                            className: 'upload_label',
	                            htmlFor: 'upload_input'
	                        },
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'upload_name' },
	                            '点击上传'
	                        ),
	                        _react2.default.createElement('input', _extends({
	                            type: 'file',
	                            id: 'upload_input',
	                            className: 'upload_input'
	                        }, this.props))
	                    )
	                )
	            );
	        }
	    }]);

	    return Upload;
	}(_react.Component), _class.defaultProps = {
	    accept: '*', // 支持上传文件类型
	    multiple: false // 是否支持多选
	}, _temp);
	exports.default = Upload;


	var asyn = {
	    formSubmit: function formSubmit(args, action, func) {
	        this.clearContext();
	        this.callBack = null;
	        var subArr = [];
	        var subArrT = [];
	        if (b$.type.isArray(args)) {
	            subArr = args;
	        } else {
	            var tag = args.tagName.toLowerCase();
	            if (tag == "form") {
	                for (var i = 0, num = args.childNodes.length; i < num; i++) {
	                    subArr.push(args.childNodes[i]);
	                }
	            } else {
	                subArr = [args];
	            }
	        }
	        //create asyn form and ifroma
	        var objForm = document.createElement("form");
	        objForm.action = action;
	        objForm.target = "bBankAsynFormSubmit_iframe_1b";
	        objForm.encoding = "multipart/form-data";
	        objForm.method = "post";
	        objForm.id = "bBankAsynFormSubmit_form_1b";
	        objForm.style.display = "none";
	        var objIframe = b$.parseDom('<iframe id="bBankAsynFormSubmit_iframe_1b" name="bBankAsynFormSubmit_iframe_1b" src="about:blank" style="display:none;" onload="javascript:setTimeout(\'asyn.complete()\',100)"></iframe>')[0];
	        //add submit value in form
	        for (var i = 0, num = subArr.length; i < num; i++) {
	            if (!subArr[i].name && subArr[i].nodeType == 1 && subArr[i].tagName.toLowerCase() == "input") subArr[i].name = "bBankAsynFormSubmit_input_1b_" + i;
	            var input = subArr[i].cloneNode(true);
	            subArrT.push(input);
	            subArr[i].parentNode.replaceChild(input, subArr[i]);
	            objForm.appendChild(subArr[i]);
	        }
	        //submit
	        document.body.appendChild(objIframe);
	        document.body.appendChild(objForm);
	        objForm.submit();
	        //dispose
	        for (var i = 0, num = subArrT.length; i < num; i++) {
	            subArrT[i].parentNode.replaceChild(subArr[i], subArrT[i]);
	        }
	        if (func) this.callBack = func;
	    },
	    complete: function complete() {
	        var responseText = "";
	        try {
	            var objIframe = document.getElementById("bBankAsynFormSubmit_iframe_1b");
	            if (objIframe.contentWindow) {
	                responseText = objIframe.contentWindow.document.body.innerHTML;
	            } else {
	                responseText = objIframe.contentDocument.document.body.innerHTML;
	            }
	        } catch (err) {}
	        this.clearContext();
	        if (this.callBack) this.callBack(responseText);
	    },
	    clearContext: function clearContext() {
	        if (b$('#bBankAsynFormSubmit_form_1b')) b$('#bBankAsynFormSubmit_form_1b').removeSelf();
	        if (b$('#bBankAsynFormSubmit_iframe_1b')) b$('#bBankAsynFormSubmit_iframe_1b').removeSelf();
	    },
	    callBack: null
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(17); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Upload.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(312);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(312, function() {
				var newContent = __webpack_require__(312);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

})