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

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CheckBoxs = function (_Component) {
	    _inherits(CheckBoxs, _Component);

	    function CheckBoxs() {
	        _classCallCheck(this, CheckBoxs);

	        /*
	        * 点击选择某一项
	        * @params index { Object } 某一项下标
	        * */
	        var _this = _possibleConstructorReturn(this, (CheckBoxs.__proto__ || Object.getPrototypeOf(CheckBoxs)).call(this));

	        _this.selectItem = function (index) {
	            console.log(index);
	        };
	        return _this;
	    }

	    _createClass(CheckBoxs, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var props = this.props;


	            return _react2.default.createElement(
	                'ul',
	                { className: 'checks_root' },
	                props.list.map(function (item, index) {
	                    var htmlFor = 'checks_input' + index;
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
	                                className: 'checks_input',
	                                id: htmlFor,
	                                type: 'checkbox',
	                                onClick: function onClick() {
	                                    return _this2.selectItem(index);
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
	    }]);

	    return CheckBoxs;
	}(_react.Component);

	exports.default = CheckBoxs;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(17); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CheckBoxs.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }

})