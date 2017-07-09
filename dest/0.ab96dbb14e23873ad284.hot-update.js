webpackHotUpdate(0,{

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(16), ReactMount = __webpack_require__(10), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(310);

	var _menu = __webpack_require__(311);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tree = function (_Component) {
	    _inherits(Tree, _Component);

	    function Tree() {
	        _classCallCheck(this, Tree);

	        var _this = _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this));

	        _this.state = {
	            menu: _menu2.default
	        };
	        return _this;
	    }

	    _createClass(Tree, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'tree_root' },
	                _react2.default.createElement(
	                    'ul',
	                    { className: 'tree_list' },
	                    _react2.default.createElement(
	                        'li',
	                        { className: 'tree_item' },
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'tree_name' },
	                            '1111'
	                        ),
	                        _react2.default.createElement(Tree, null)
	                    )
	                )
	            );
	        }
	    }]);

	    return Tree;
	}(_react.Component);

	exports.default = Tree;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(17); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Tree.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

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

/***/ }

})