webpackHotUpdate(0,{

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

	            if (!index && _this.props.isAllSeleted) {
	                // 支持全选
	                stateArr = new Array(list.length).fill(checkState);
	            } else {
	                stateArr[index] = checkState;

	                // 检测是否满足全选状态
	                if (list[0] === '全选') {
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

/***/ }

})