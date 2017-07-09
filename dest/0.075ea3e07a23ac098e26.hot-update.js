webpackHotUpdate(0,{

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

	        _this.uploadChange = function (filename) {
	            console.log('filename', filename);
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
	                    serverUrl: '/' // 上传地址
	                    , change: this.uploadChange // 选择文件后回调
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

/***/ 313:
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

	__webpack_require__(314);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Upload = (_temp = _class = function (_Component) {
	    _inherits(Upload, _Component);

	    function Upload() {
	        _classCallCheck(this, Upload);

	        // 是否是IE9
	        var _this = _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this));

	        _this.isIE9Version = function () {
	            // 这个组件只针对 IE9+ 所以 若是IE浏览器时，版本默认就是9 或 9+
	            var navigator = window.navigator;
	            var appName = navigator.appName;
	            var appVersion = navigator.appVersion;
	            return appName === 'Microsoft Internet Explorer' && /MSIE9\.0/.test(appVersion);
	        }();

	        // 选择文件回调
	        _this.selectFile = function (e) {
	            var files = e.target.files[0];
	        };

	        // 点击提交上传
	        _this.submit = function () {
	            if (_this.isIE9Version) {
	                _this.formDom.submit();
	            } else {}
	        };
	        return _this;
	    }

	    _createClass(Upload, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var accept = _props.accept;
	            var multiple = _props.multiple;
	            var serverUrl = _props.serverUrl;


	            return _react2.default.createElement(
	                'div',
	                { className: 'upload_root' },
	                _react2.default.createElement('iframe', {
	                    ref: function ref(iframe) {
	                        return _this2.iframeDom = iframe;
	                    },
	                    name: 'upload_iframe',
	                    className: 'upload_iframe'
	                }),
	                _react2.default.createElement(
	                    'form',
	                    {
	                        className: 'upload_form',
	                        ref: function ref(form) {
	                            return _this2.formDom = form;
	                        },
	                        action: serverUrl,
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
	                            '选择文件'
	                        ),
	                        _react2.default.createElement('input', {
	                            type: 'file',
	                            id: 'upload_input',
	                            className: 'upload_input',
	                            accept: accept,
	                            multiple: multiple,
	                            onChange: this.selectFile
	                        })
	                    ),
	                    _react2.default.createElement(
	                        'button',
	                        { className: 'upload_submit', onClick: this.submit },
	                        '点击提交'
	                    )
	                )
	            );
	        }
	    }]);

	    return Upload;
	}(_react.Component), _class.defaultProps = {
	    accept: '*', // 支持上传文件类型
	    multiple: false }, _temp);
	exports.default = Upload;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(17); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Upload.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }

})