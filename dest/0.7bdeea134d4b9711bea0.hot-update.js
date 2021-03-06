webpackHotUpdate(0,{

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
	                _react2.default.createElement('iframe', {
	                    className: 'upload_iframe',
	                    name: 'upload_iframe'
	                }),
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

/***/ }

})