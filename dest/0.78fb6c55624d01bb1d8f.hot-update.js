webpackHotUpdate(0,{

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
	        * */
	        _this.showChild = function (index) {
	            var tmpArr = [];
	            tmpArr[index] = !_this.state.childShowArr[index];

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
	                                onClick: function onClick() {
	                                    return _this2.showChild(index);
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
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // console.log(this)
	        }
	    }]);

	    return Tree;
	}(_react.Component), _class.defaultProps = {
	    className: 'tree_root' // 菜单根组件样式
	}, _temp);
	exports.default = Tree;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(17); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Tree.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }

})