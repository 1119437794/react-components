webpackHotUpdate(0,{

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

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Upload = (_temp = _class = function (_Component) {
	    _inherits(Upload, _Component);

	    function Upload() {
	        _classCallCheck(this, Upload);

	        var _this = _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this));

	        _this.allFiles = {}; // 被选择上传的所有文件

	        // 是否是IE9
	        _this.isIE9 = function () {
	            // 这个组件只针对 IE9+ 所以 若是IE浏览器时，版本默认就是9 或 9+
	            var navigator = window.navigator;
	            var appName = navigator.appName;
	            var appVersion = navigator.appVersion;
	            return appName === 'Microsoft Internet Explorer' && /MSIE9\.0/.test(appVersion);
	        }();

	        /*
	        * 选择文件回调
	        * @params e { Obj } 事件对象
	        * */
	        _this.selectFile = function (e) {
	            var _this$props = _this.props;
	            var change = _this$props.change;
	            var isImmediate = _this$props.isImmediate;

	            var files = [].concat(_toConsumableArray(e.target.files)); // 将类数组转成数组
	            files.map(function (item) {
	                return _this.allFiles[item.name] = item;
	            }); // 去重处理
	            change(Object.keys(_this.allFiles));

	            if (isImmediate) {
	                // 用户选择文件 立即上传
	                _this.submit();
	            }
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
	            var isImmediate = _props.isImmediate;


	            return _react2.default.createElement(
	                'div',
	                { className: 'upload_root' },
	                _react2.default.createElement('iframe', {
	                    name: 'upload_iframe',
	                    className: 'upload_iframe',
	                    ref: function ref(iframe) {
	                        return _this2.iframeDom = iframe;
	                    }
	                }),
	                _react2.default.createElement(
	                    'form',
	                    {
	                        method: 'post',
	                        action: serverUrl,
	                        target: 'upload_iframe',
	                        className: 'upload_form',
	                        encType: 'multipart/form-data',
	                        ref: function ref(form) {
	                            return _this2.formDom = form;
	                        }
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
	                            accept: accept,
	                            multiple: multiple,
	                            className: 'upload_input',
	                            onChange: this.selectFile
	                        })
	                    )
	                ),
	                isImmediate ? null : _react2.default.createElement(
	                    'button',
	                    { className: 'upload_submit', onClick: this.submit },
	                    '点击提交'
	                )
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this3 = this;

	            /*
	             * 点击提交上传
	             * 惰性载入处理
	             * */
	            this.submit = function () {
	                if (_this3.isIE9) {
	                    return function () {
	                        return _this3.formDom.submit();
	                    };
	                }

	                return function () {
	                    var fd = new FormData();
	                    var allFiles = _this3.allFiles;
	                    for (var i in allFiles) {
	                        fd.append(i, allFiles[i]);
	                    }
	                    _this3.props.submit(fd);
	                };
	            }();

	            // 针对IE9上传完毕后回调
	            var complete = this.props.complete;
	            this.iframeDom.onLoad = function () {
	                complete(this.contentWindow.document.body.innerHTML);
	            };
	        }
	    }]);

	    return Upload;
	}(_react.Component), _class.defaultProps = {
	    accept: '*', // 支持上传文件类型
	    multiple: true, // 是否支持多选
	    isImmediate: true // 是否立即上传
	}, _temp);
	exports.default = Upload;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(17); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Upload.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }

})