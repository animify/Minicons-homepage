(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["minicons"] = factory();
	else
		root["minicons"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MiniconsHandler = __webpack_require__(2);

var _MiniconsHandler2 = _interopRequireDefault(_MiniconsHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = new _MiniconsHandler2.default();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint no-console: "off" */

var _minicons = __webpack_require__(3);

var _minicons2 = _interopRequireDefault(_minicons);

var _Validator = __webpack_require__(4);

var _Validator2 = _interopRequireDefault(_Validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MiniconsHandler = function () {
    _createClass(MiniconsHandler, [{
        key: 'setOptions',

        /**
         * User-set options for overriding defaults
         * @param {Object} options Observe and config options
         */
        value: function setOptions(options) {
            var _this = this;

            _Validator2.default.validateOptions(options, function (error) {
                if (!error) {
                    options.config.props = Object.assign(_this.config.props, options.config.props);
                    _this.config = options.config || _this.config;
                    _this.canObserve = options.observe !== undefined ? options.observe : true;
                } else {
                    console.log('%cMinicons:', 'font-weight: bold; text-decoration: underline;', 'Oh oh! Something wrong when processing your options. ' + error.message + ' [' + error.type + ']');
                }
            });
        }

        /**
         * Finds an icon by name or alias
         * @param  {string} name The defined name of the Minicon
         * @return {object} The object of the icon
         */

    }, {
        key: 'find',
        value: function find(name) {
            return this.icons.find(function (icon) {
                var directName = icon.name === name;
                var aliasName = icon.aliases.includes(name);
                return directName || aliasName;
            });
        }

        /**
         * Creates an SVG Minicon element
         * @param  {string} name The defined name of the Minicon
         * @param  {object} props The props to be applied to the SVG element
         * @return {Element} The SVG element of the Minicon
         */

    }, {
        key: 'create',
        value: function create(name, props) {
            var propsArray = [];
            var iconObject = this.find(name);
            var mergedProps = Object.assign(props, this.defaultProps);

            if (!iconObject) return undefined;

            Object.keys(mergedProps).forEach(function (prop) {
                mergedProps[prop] && propsArray.push(prop + '="' + mergedProps[prop] + '"');
            });

            var iconString = '<svg ' + propsArray.join(' ') + '>' + iconObject.content + '</svg>';
            var iconSvg = new DOMParser().parseFromString(iconString, 'image/svg+xml');
            var svg = iconSvg.querySelector('svg');

            if (iconObject.hasOwnProperty('fillTag')) {
                var fillableTags = svg.getElementsByTagName(iconObject.fillTag);
                fillableTags = Array.prototype.slice.call(fillableTags);
                fillableTags.forEach(function (element) {
                    element.setAttribute('fill', mergedProps.stroke);
                    element.setAttribute('stroke-width', 0);
                });
            }

            return svg;
        }

        /**
         * Gathers all [data-minicon] elements
         * and swaps them into Minicons
         */

    }, {
        key: 'swap',
        value: function swap() {
            var _this2 = this;

            var iconElements = document.querySelectorAll('[data-minicon]');
            iconElements.forEach(function (icon) {
                return _this2.swapElement(icon);
            });

            if (this.firstRun) {
                this.canObserve && this.setObserver();
                this.firstRun = false;
            }
        }

        /**
         * Swaps the DOM element with a Minicon
         * @param {Element} node The element that is to be switched
         */

    }, {
        key: 'swapElement',
        value: function swapElement(element) {
            var iconProps = Object.assign(this.config.props, {
                class: element.classList.value + ' minicon minicon-' + element.dataset.minicon
            });
            var iconSvg = this.create(element.dataset.minicon, iconProps);

            if (!iconSvg) return;

            element.parentNode.replaceChild(iconSvg, element);
        }

        /**
         * Observes for changes done in the body
         */

    }, {
        key: 'setObserver',
        value: async function setObserver() {
            await this.watch(document.getElementsByTagName('body')[0]);
        }

        /**
         * Sets up a mutation observer
         * and checks if Minicon is added
         * @param  {Element} parent The parent element that is being watched
         * @return {Promise} Returns the mutation observer promise
         */

    }, {
        key: 'watch',
        value: function watch(parent) {
            var _this3 = this;

            var observerConfig = {
                attributes: false,
                childList: true,
                characterData: false
            };

            return new Promise(function (resolve) {
                new MutationObserver(function (mutations) {
                    mutations.forEach(function (mutation) {
                        return _this3.handleMutation(mutation);
                    });
                    resolve(mutations);
                }).observe(parent, observerConfig);
            });
        }

        /**
         * Checks if mutation contains a minicon
         * and swaps the affected element
         * @param {Object} mutation The mutation object passed from the observer
         */

    }, {
        key: 'handleMutation',
        value: function handleMutation(mutation) {
            if (mutation.addedNodes.length === 0) return;

            var addedNode = mutation.addedNodes[0];
            var nodeName = addedNode.dataset && addedNode.dataset.minicon;
            nodeName && this.swapElement(addedNode);
        }

        /**
         * Sets the default props and the icon JSON file/config
         */

    }]);

    function MiniconsHandler() {
        _classCallCheck(this, MiniconsHandler);

        this.firstRun = true;
        this.canObserve = true;
        this.config = _minicons2.default.config;
        this.icons = _minicons2.default.icons;
        this.defaultProps = {
            xmlns: 'http://www.w3.org/2000/svg'
        };
    }

    return MiniconsHandler;
}();

exports.default = MiniconsHandler;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {"config":{"name":"default","props":{"width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"#000","stroke-width":2,"stroke-linejoin":"round","stroke-linecap":"round"}},"icons":[{"name":"add-circle","content":"<circle cx=\"12\" cy=\"12\" r=\"10\" data-name=\"--Circle\"></circle><line x1=\"15.5\" x2=\"8.5\" y1=\"12\" y2=\"12\"></line><line x1=\"12\" x2=\"12\" y1=\"15.5\" y2=\"8.5\"></line>","aliases":["plus-circle"]},{"name":"add-square","content":"<rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" data-name=\"--Rectangle\" rx=\"2\" ry=\"2\"></rect><line x1=\"15.5\" x2=\"8.5\" y1=\"12\" y2=\"12\"></line><line x1=\"12\" x2=\"12\" y1=\"15.5\" y2=\"8.5\"></line>","aliases":["plus-square"]},{"name":"add","content":"<g data-name=\"add\"><line x1=\"12\" x2=\"12\" y1=\"19\" y2=\"5\"></line><line x1=\"5\" x2=\"19\" y1=\"12\" y2=\"12\"></line></g>","aliases":["plus"]},{"name":"alert-circle","content":"<line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\"></line><line x1=\"12\" x2=\"12\" y1=\"16\" y2=\"16\"></line><circle cx=\"12\" cy=\"12\" r=\"10\" data-name=\"--Circle\"></circle>","aliases":[]},{"name":"alert-square","content":"<line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\"></line><rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" data-name=\"--Rectangle\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" x2=\"12\" y1=\"16\" y2=\"16\"></line>","aliases":[]},{"name":"alert-triangle","content":"<path d=\"M10.2 3.2L2.2 19A2 2 0 0 0 4 21.9h16a2 2 0 0 0 1.8-2.9l-8-15.9a2 2 0 0 0-3.6.1z\" data-name=\"--Triangle\"></path><line x1=\"12\" x2=\"12\" y1=\"9\" y2=\"13\"></line><line x1=\"12\" x2=\"12\" y1=\"17\" y2=\"17\"></line>","aliases":[]},{"name":"align-center","content":"<polygon points=\"16.4 18 7.6 18 7.6 18 16.4 18 16.4 18\"></polygon><polygon points=\"20 14 4 14 4 14 20 14 20 14\"></polygon><polygon points=\"16.4 10 7.6 10 7.6 10 16.4 10 16.4 10\"></polygon><polygon points=\"20 6 4 6 4 6 20 6 20 6\"></polygon>","aliases":[]},{"name":"align-justify","content":"<polygon points=\"20 18 4 18 4 18 20 18 20 18\"></polygon><polygon points=\"20 14 4 14 4 14 20 14 20 14\"></polygon><polygon points=\"20 10 4 10 4 10 20 10 20 10\"></polygon><polygon points=\"20 6 4 6 4 6 20 6 20 6\"></polygon>","aliases":[]},{"name":"align-left","content":"<polygon points=\"12.9 18 4.1 18 4.1 18 12.9 18 12.9 18\"></polygon><polygon points=\"20 14 4 14 4 14 20 14 20 14\"></polygon><polygon points=\"12.9 10 4.1 10 4.1 10 12.9 10 12.9 10\"></polygon><polygon points=\"20 6 4 6 4 6 20 6 20 6\"></polygon>","aliases":[]},{"name":"align-right","content":"<polygon points=\"19.9 18 11.1 18 11.1 18 19.9 18 19.9 18\"></polygon><polygon points=\"20 14 4 14 4 14 20 14 20 14\"></polygon><polygon points=\"19.9 10 11.1 10 11.1 10 19.9 10 19.9 10\"></polygon><polygon points=\"20 6 4 6 4 6 20 6 20 6\"></polygon>","aliases":[]},{"name":"arrow-down-left","content":"<polyline points=\"5.3 11.6 5.3 18.7 12.4 18.7\" data-name=\"Right\"></polyline><line x1=\"18.7\" x2=\"6.9\" y1=\"5.3\" y2=\"17.1\"></line>","aliases":[]},{"name":"arrow-down-right","content":"<polyline points=\"11.6 18.7 18.7 18.7 18.7 11.6\" data-name=\"Right\"></polyline><line x1=\"5.3\" x2=\"17.1\" y1=\"5.3\" y2=\"17.1\"></line>","aliases":[]},{"name":"arrow-down","content":"<polyline points=\"7 16.4 12 21.5 17 16.4\" data-name=\"Right\"></polyline><line x1=\"12\" x2=\"12\" y1=\"2.5\" y2=\"19.2\"></line>","aliases":[]},{"name":"arrow-left","content":"<polyline points=\"7.6 7 2.5 12 7.6 17\" data-name=\"Right\"></polyline><line x1=\"21.5\" x2=\"4.8\" y1=\"12\" y2=\"12\"></line>","aliases":[]},{"name":"arrow-right","content":"<polyline points=\"16.4 7 21.5 12 16.4 17\" data-name=\"Right\"></polyline><line x1=\"2.5\" x2=\"19.2\" y1=\"12\" y2=\"12\"></line>","aliases":[]},{"name":"arrow-up-left","content":"<polyline points=\"5.3 12.4 5.3 5.3 12.4 5.3\" data-name=\"Right\"></polyline><line x1=\"18.7\" x2=\"6.9\" y1=\"18.7\" y2=\"6.9\"></line>","aliases":[]},{"name":"arrow-up-right","content":"<polyline points=\"18.7 12.4 18.7 5.3 11.6 5.3\" data-name=\"Right\"></polyline><line x1=\"5.3\" x2=\"17.1\" y1=\"18.7\" y2=\"6.9\"></line>","aliases":[]},{"name":"arrow-up","content":"<polyline points=\"7 7.5 12 2.5 17 7.5\" data-name=\"Right\"></polyline><line x1=\"12\" x2=\"12\" y1=\"21.3\" y2=\"4.8\"></line>","aliases":[]},{"name":"bell","content":"<path d=\"M18.9 11.2s0-8.7-6.9-8.7-6.9 8.7-6.9 8.7v3.9l-2.6 2.4h19l-2.6-2.4z\"></path><path d=\"M14.5 20.5s-.5 1-2.5 1-2.5-1-2.5-1\"></path>","aliases":[]},{"name":"browsers","content":"<rect width=\"14\" height=\"14\" x=\"3\" y=\"7\" rx=\"2\" ry=\"2\"></rect><path d=\"M8 3h11a2 2 0 0 1 2 2v11\"></path>","aliases":[]},{"name":"bubble-circle","content":"<path d=\"M7.6 20.4a9.5 9.5 0 1 0-4-4l-1.1 5.1z\"></path>","aliases":["chat-circle"]},{"name":"bubble-square","content":"<path d=\"M7.7 18.3h11.7a2.1 2.1 0 0 0 2.1-2.1V4.6a2.1 2.1 0 0 0-2.1-2.1H4.6a2.1 2.1 0 0 0-2.1 2.1v16.9z\"></path>","aliases":["chat-square"]},{"name":"chevron-down","content":"<polyline points=\"5 8.5 12 15.5 19 8.5\"></polyline>","aliases":[]},{"name":"chevron-left","content":"<polyline points=\"15.5 5 8.5 12 15.5 19\"></polyline>","aliases":[]},{"name":"chevron-right","content":"<polyline points=\"8.5 5 15.5 12 8.5 19\"></polyline>","aliases":[]},{"name":"chevron-up","content":"<polyline points=\"5 15.5 12 8.5 19 15.5\"></polyline>","aliases":[]},{"name":"circle","content":"<circle cx=\"12\" cy=\"12\" r=\"10\" data-name=\"Circle\"></circle>","aliases":["ellipse"]},{"name":"clock","content":"<polyline points=\"11.9 5.9 11.9 11.9 12 12 14.1 14.1\"></polyline><circle cx=\"12\" cy=\"12\" r=\"10\" data-name=\"Circle\"></circle>","aliases":["time"]},{"name":"code","content":"<polyline points=\"15.5 7 20.5 12 15.5 17\" data-name=\"Right\"></polyline><polyline points=\"8.5 7 3.5 12 8.5 17\" data-name=\"Left\"></polyline>","aliases":[]},{"name":"disc","content":"<circle cx=\"12\" cy=\"12\" r=\"10\" data-name=\"Circle\"></circle><circle cx=\"12\" cy=\"12\" r=\"3.5\" data-name=\"Circle\"></circle>","aliases":[]},{"name":"download","content":"<path d=\"M3 12.3v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path><polyline points=\"7.9 12.3 12 16.3 16.1 12.3\" data-name=\"Right\"></polyline><line x1=\"12\" x2=\"12\" y1=\"2.7\" y2=\"14.2\"></line>","aliases":[]},{"name":"edit","content":"<path d=\"M20 16v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4\"></path><polygon points=\"12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8\"></polygon>","aliases":[]},{"name":"expand","content":"<polyline points=\"3 17.3 3 21 6.7 21\" data-name=\"Right\"></polyline><line x1=\"10\" x2=\"3.8\" y1=\"14\" y2=\"20.2\"></line><line x1=\"14\" x2=\"20.2\" y1=\"10\" y2=\"3.8\"></line><polyline points=\"21 6.7 21 3 17.3 3\" data-name=\"Right\"></polyline>","aliases":[]},{"name":"file-add","content":"<path d=\"M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7.1a2 2 0 0 1 1.5.6l4.9 5.2a2 2 0 0 1 .5 1.4V20a2 2 0 0 1-2 2z\"></path><line x1=\"12\" x2=\"12\" y1=\"17\" y2=\"11\"></line><line x1=\"9\" x2=\"15\" y1=\"14\" y2=\"14\"></line>","aliases":["file-plus"]},{"name":"file-remove","content":"<path d=\"M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7.1a2 2 0 0 1 1.5.6l4.9 5.2a2 2 0 0 1 .5 1.4V20a2 2 0 0 1-2 2z\"></path><line x1=\"9\" x2=\"15\" y1=\"16.5\" y2=\"16.5\"></line>","aliases":["file-minus"]},{"name":"file-text","content":"<path d=\"M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7.1a2 2 0 0 1 1.5.6l4.9 5.2a2 2 0 0 1 .5 1.4V20a2 2 0 0 1-2 2z\"></path><line x1=\"7.9\" x2=\"16.1\" y1=\"17.5\" y2=\"17.5\"></line><line x1=\"7.9\" x2=\"16.1\" y1=\"13.5\" y2=\"13.5\"></line><line x1=\"8\" x2=\"13\" y1=\"9.5\" y2=\"9.5\"></line>","aliases":[]},{"name":"folder","content":"<path d=\"M2 18.8V5.3A2.3 2.3 0 0 1 4.3 3h5.3a1.1 1.1 0 0 1 .8.4l2.8 3.2a1.1 1.1 0 0 0 .8.4h5.6A2.2 2.2 0 0 1 22 9.2v9.7a2.2 2.2 0 0 1-2.2 2.1H4.2A2.2 2.2 0 0 1 2 18.8z\"></path>","aliases":[]},{"name":"grid","content":"<rect width=\"7\" height=\"7\" x=\"14.5\" y=\"2.5\"></rect><rect width=\"7\" height=\"7\" x=\"14.5\" y=\"14.5\"></rect><rect width=\"7\" height=\"7\" x=\"2.5\" y=\"2.5\"></rect><rect width=\"7\" height=\"7\" x=\"2.5\" y=\"14.5\"></rect>","aliases":[]},{"name":"info-circle","content":"<circle cx=\"12\" cy=\"12\" r=\"10\" data-name=\"--Circle\"></circle><line x1=\"12\" x2=\"12\" y1=\"12\" y2=\"16\"></line><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"8\"></line>","aliases":[]},{"name":"info-square","content":"<rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" data-name=\"--Rectangle\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" x2=\"12\" y1=\"12\" y2=\"16\"></line><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"8\"></line>","aliases":[]},{"name":"lock","content":"<rect width=\"16\" height=\"10\" x=\"4\" y=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M16.5 11V8c0-2.8-.5-5-4.5-5S7.5 5.2 7.5 8v3\"></path>","aliases":[]},{"name":"mail-read","content":"<polyline points=\"4 9 12 14 20 9\"></polyline><polyline points=\"3 8.5 12 3.5 21 8.5\"></polyline><path d=\"M21 8.5v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-10\"></path>","aliases":[]},{"name":"mail","content":"<polyline points=\"4 8.2 12 14.1 20 8.2\"></polyline><rect width=\"18\" height=\"14\" x=\"3\" y=\"6.5\" rx=\"2\" ry=\"2\"></rect>","aliases":[]},{"name":"maximize","content":"<path d=\"M3 8V5a2 2 0 0 1 2-2h3\"></path><path d=\"M21 16v3a2 2 0 0 1-2 2h-3\"></path><path d=\"M3 16v3a2 2 0 0 0 2 2h3\"></path><path d=\"M21 8V5a2 2 0 0 0-2-2h-3\"></path>","aliases":[]},{"name":"minimize","content":"<path d=\"M8 3v3a2 2 0 0 1-2 2H3\"></path><path d=\"M16 21v-3a2 2 0 0 1 2-2h3\"></path><path d=\"M8 21v-3a2 2 0 0 0-2-2H3\"></path><path d=\"M16 3v3a2 2 0 0 0 2 2h3\"></path>","aliases":[]},{"name":"minus","content":"<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\"></line>","aliases":["remove"]},{"name":"more-horizontal","content":"<path d=\"M8 12a2 2 0 1 1-2-2 2 2 0 0 1 2 2zm10-2a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm-6 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2z\"></path>","aliases":[],"fillTag":"path"},{"name":"more-vertical","content":"<path d=\"M12 16a2 2 0 1 1-2 2 2 2 0 0 1 2-2zM10 6a2 2 0 1 0 2-2 2 2 0 0 0-2 2zm0 6a2 2 0 1 0 2-2 2 2 0 0 0-2 2z\"></path>","aliases":[],"fillTag":"path"},{"name":"navigation-ne","content":"<polyline points=\"21.5 2.5 2.5 10.2 9.6 14.4 13.8 21.5 21.5 2.5\"></polyline>","aliases":[]},{"name":"navigation-nw","content":"<polyline points=\"2.5 2.5 10.2 21.5 14.4 14.4 21.5 10.2 2.5 2.5\"></polyline>","aliases":[]},{"name":"navigation","content":"<polyline points=\"12 2.5 4 21.5 12 19.4 20 21.5 12 2.5\"></polyline>","aliases":[]},{"name":"push-down","content":"<polyline points=\"5 6.1 12 13.1 19 6.1\" data-name=\"Down\"></polyline><line x1=\"5\" x2=\"19\" y1=\"17.9\" y2=\"17.9\"></line>","aliases":[]},{"name":"push-left","content":"<polyline points=\"17.9 5 10.9 12 17.9 19\"></polyline><line x1=\"6.1\" x2=\"6.1\" y1=\"5\" y2=\"19\"></line>","aliases":[]},{"name":"push-right","content":"<polyline points=\"6.1 19 13.1 12 6.1 5\"></polyline><line x1=\"17.9\" x2=\"17.9\" y1=\"19\" y2=\"5\"></line>","aliases":[]},{"name":"push-up","content":"<polyline points=\"19 17.9 12 10.9 5 17.9\" data-name=\"Down\"></polyline><line x1=\"19\" x2=\"5\" y1=\"6.1\" y2=\"6.1\"></line>","aliases":[]},{"name":"remove-circle","content":"<circle cx=\"12\" cy=\"12\" r=\"10\" data-name=\"--Circle\"></circle><line x1=\"15.5\" x2=\"8.5\" y1=\"12\" y2=\"12\"></line>","aliases":["minus-circle"]},{"name":"remove-square","content":"<rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" data-name=\"--Rectangle\" rx=\"2\" ry=\"2\"></rect><line x1=\"15.5\" x2=\"8.5\" y1=\"12\" y2=\"12\"></line>","aliases":["minus-square"]},{"name":"search","content":"<circle cx=\"10.1\" cy=\"10.1\" r=\"8\"></circle><line x1=\"21.9\" x2=\"16.3\" y1=\"21.9\" y2=\"16.3\"></line>","aliases":["magnifier"]},{"name":"shrink","content":"<polyline points=\"10 17.7 10 14 6.3 14\" data-name=\"Right\"></polyline><line x1=\"3\" x2=\"9.2\" y1=\"21\" y2=\"14.8\"></line><polyline points=\"14 6.3 14 10 17.7 10\" data-name=\"Right\"></polyline><line x1=\"21\" x2=\"14.8\" y1=\"3\" y2=\"9.2\"></line>","aliases":[]},{"name":"sidebar-bottom","content":"<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" data-name=\"Square\" rx=\"2\" ry=\"2\"></rect><line x1=\"21\" x2=\"3\" y1=\"15\" y2=\"15\"></line>","aliases":[]},{"name":"sidebar-left","content":"<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" data-name=\"Square\" rx=\"2\" ry=\"2\"></rect><line x1=\"9\" x2=\"9\" y1=\"21\" y2=\"3\"></line>","aliases":[]},{"name":"sidebar-right","content":"<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" data-name=\"Square\" rx=\"2\" ry=\"2\"></rect><line x1=\"15\" x2=\"15\" y1=\"21\" y2=\"3\"></line>","aliases":[]},{"name":"sidebar-top","content":"<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" data-name=\"Square\" rx=\"2\" ry=\"2\"></rect><line x1=\"21\" x2=\"3\" y1=\"9\" y2=\"9\"></line>","aliases":[]},{"name":"signal","content":"<path d=\"M2.5 12a9.5 9.5 0 1 1 9.5 9.5\"></path><path d=\"M7.5 12a4.5 4.5 0 1 1 4.5 4.5\"></path>","aliases":[]},{"name":"square","content":"<rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" rx=\"2\" ry=\"2\"></rect>","aliases":[]},{"name":"stopwatch","content":"<line x1=\"12\" x2=\"12\" y1=\"10.8\" y2=\"14\"></line><circle cx=\"12\" cy=\"14.5\" r=\"7.9\" data-name=\"Circle\"></circle><polyline points=\"12 5.5 12 1.5 9 1.5 15 1.5\"></polyline>","aliases":[]},{"name":"support","content":"<circle cx=\"12\" cy=\"12\" r=\"4\" transform=\"rotate(-45 11.985 12.036)\"></circle><circle cx=\"12\" cy=\"12\" r=\"10\" transform=\"rotate(-45 11.985 12.036)\"></circle><line x1=\"5\" x2=\"9\" y1=\"5\" y2=\"9\"></line><line x1=\"15\" x2=\"19\" y1=\"9\" y2=\"5\"></line><line x1=\"15\" x2=\"19\" y1=\"15\" y2=\"19\"></line><line x1=\"9\" x2=\"5\" y1=\"15\" y2=\"19\"></line>","aliases":["help"]},{"name":"thumbs-down","content":"<path d=\"M7.3 12.6l2.8 8.4a.6.6 0 0 0 .8.3l1-.5a2.6 2.6 0 0 0 1.4-2.3v-3.9h6.4a2 2 0 0 0 1.9-2.5l-2-8a2 2 0 0 0-1.9-1.5H4.3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3v-10\"></path>","aliases":[]},{"name":"thumbs-up","content":"<path d=\"M7.3 11.4L10.1 3a.6.6 0 0 1 .8-.3l1 .5a2.6 2.6 0 0 1 1.4 2.3v3.9h6.4a2 2 0 0 1 1.9 2.5l-2 8a2 2 0 0 1-1.9 1.5H4.3a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h3v10\"></path>","aliases":[]},{"name":"tick","content":"<polyline points=\"3.7 14.3 9.6 19 20.3 5\"></polyline>","aliases":["check"]},{"name":"triangle","content":"<path d=\"M10.2 3.1l-8 16A2 2 0 0 0 4 22h16a2 2 0 0 0 1.8-2.9l-8-16a2 2 0 0 0-3.6 0z\" data-name=\"Triangle\"></path>","aliases":[]},{"name":"unlock","content":"<rect width=\"16\" height=\"10\" x=\"4\" y=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M16.5 11V8c0-2.8-.5-5-4.5-5\"></path>","aliases":[]},{"name":"upload","content":"<path d=\"M3 12.3v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path><polyline points=\"7.9 6.7 12 2.7 16.1 6.7\" data-name=\"Right\"></polyline><line x1=\"12\" x2=\"12\" y1=\"16.3\" y2=\"4.8\"></line>","aliases":["share"]},{"name":"user-add","content":"<path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><line x1=\"17\" x2=\"23\" y1=\"11\" y2=\"11\"></line><line x1=\"20\" x2=\"20\" y1=\"8\" y2=\"14\"></line>","aliases":["user-plus"]},{"name":"user-check","content":"<path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><polyline points=\"16 11 18 13 22.1 8.9\"></polyline>","aliases":["user-tick"]},{"name":"user-remove","content":"<path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><line x1=\"17\" x2=\"23\" y1=\"11\" y2=\"11\"></line>","aliases":["user-minus"]},{"name":"user-x","content":"<path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><line x1=\"17.9\" x2=\"22.1\" y1=\"13.1\" y2=\"8.9\"></line><line x1=\"17.9\" x2=\"22.1\" y1=\"8.9\" y2=\"13.1\"></line>","aliases":["user-delete"]},{"name":"user","content":"<path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle>","aliases":[]},{"name":"volume-down","content":"<polygon points=\"4.9 9 8.9 9 13.9 3 13.9 21 8.9 16 3.9 16 3.9 9 4.9 9\"></polygon><path d=\"M17.5 15a3 3 0 0 0 0-6\"></path>","aliases":[]},{"name":"volume-mute","content":"<polygon points=\"8 9 12 9 17 3 17 21 12 16 7 16 7 9 8 9\"></polygon>","aliases":[]},{"name":"volume-off","content":"<line x1=\"3\" x2=\"21\" y1=\"3\" y2=\"21\"></line><polyline points=\"9.9 5.5 12 3 12 21 7 16 2 16 2 9 3 9 7 9 8 9\"></polyline><path d=\"M21.4 16a8.5 8.5 0 0 0 1.1-4.2c0-4.3-3.1-7.8-7-7.8\"></path><path d=\"M15.5 20.5a5.2 5.2 0 0 0 3-1\"></path><path d=\"M18.3 13a2.7 2.7 0 0 0 .2-1.1 2.9 2.9 0 0 0-3-2.9\"></path>","aliases":[]},{"name":"volume-up","content":"<polygon points=\"2.9 9 6.9 9 11.9 3 11.9 21 6.9 16 1.9 16 1.9 9 2.9 9\"></polygon><path d=\"M15.5 19.5a7.3 7.3 0 0 0 7-7.5 7.3 7.3 0 0 0-7-7.5\"></path><path d=\"M15.5 15a3 3 0 0 0 0-6\"></path>","aliases":[]},{"name":"x-circle","content":"<circle cx=\"12\" cy=\"12\" r=\"10\" data-name=\"--Circle\"></circle><line x1=\"14.5\" x2=\"9.5\" y1=\"9.5\" y2=\"14.5\"></line><line x1=\"14.5\" x2=\"9.5\" y1=\"14.5\" y2=\"9.5\"></line>","aliases":[]},{"name":"x-square","content":"<rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" data-name=\"--Rectangle\" rx=\"2\" ry=\"2\"></rect><line x1=\"14.5\" x2=\"9.5\" y1=\"9.5\" y2=\"14.5\"></line><line x1=\"14.5\" x2=\"9.5\" y1=\"14.5\" y2=\"9.5\"></line>","aliases":[]},{"name":"x","content":"<line x1=\"5\" x2=\"19\" y1=\"4.8\" y2=\"19.2\"></line><line x1=\"19\" x2=\"5\" y1=\"4.8\" y2=\"19.2\"></line>","aliases":[]},{"name":"zoom-in","content":"<circle cx=\"10\" cy=\"10\" r=\"8\"></circle><line x1=\"21.8\" x2=\"16.2\" y1=\"21.8\" y2=\"16.2\"></line><line x1=\"13\" x2=\"7\" y1=\"10\" y2=\"10\"></line><circle cx=\"10.1\" cy=\"10.1\" r=\"8\"></circle><line x1=\"21.9\" x2=\"16.3\" y1=\"21.9\" y2=\"16.3\"></line><line x1=\"13.1\" x2=\"7.1\" y1=\"10.1\" y2=\"10.1\"></line><line x1=\"10\" x2=\"10\" y1=\"13\" y2=\"7\"></line>","aliases":[]},{"name":"zoom-out","content":"<circle cx=\"10.1\" cy=\"10.1\" r=\"8\"></circle><line x1=\"21.9\" x2=\"16.3\" y1=\"21.9\" y2=\"16.3\"></line><line x1=\"13.1\" x2=\"7.1\" y1=\"10.1\" y2=\"10.1\"></line>","aliases":[]}]}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint consistent-return: "off" */

var Validator = function () {
    function Validator() {
        _classCallCheck(this, Validator);
    }

    _createClass(Validator, null, [{
        key: 'validateOptions',

        /**
         * Validate user options when passed
         * through to setOptions
         * @param  {Object} options Observe and config options object
         * @return {Object | boolean} Return error object or true if valid
         */
        value: function validateOptions(options, next) {
            var error = {
                type: '',
                message: ''
            };

            if (options === null) {
                error.type = 'Object';
                error.message = 'Options are null.';

                return next(error);
            }

            if (!options) {
                error.type = 'Object';
                error.message = 'Options are undefined.';

                return next(error);
            }

            if (options.hasOwnProperty('observe') && typeof options.observe !== 'boolean') {
                error.type = 'options.observe';
                error.message = 'Observe property is not a boolean.';

                return next(error);
            }

            if (options.hasOwnProperty('config')) {
                if (options.config.hasOwnProperty('name') && typeof options.config.name !== 'string') {
                    error.type = 'options.config.name';
                    error.message = 'Config name is not a string.';

                    return next(error);
                }

                if (options.config.hasOwnProperty('props')) {
                    ['width', 'height', 'stroke-width'].forEach(function (prop) {
                        if (options.config.props.hasOwnProperty(prop) && typeof options.config.props[prop] !== 'number') {
                            error.type = 'options.config.props.' + prop;
                            error.message = 'Config ' + prop + ' property is not a number.';

                            return next(error);
                        }
                    });

                    ['viewBox', 'fill', 'stroke', 'stroke-linecap', 'stroke-linejoin'].forEach(function (prop) {
                        if (options.config.props.hasOwnProperty(prop) && typeof options.config.props[prop] !== 'string') {
                            error.type = 'options.config.props.' + prop;
                            error.message = 'Config ' + prop + ' property is not a string.';

                            return next(error);
                        }
                    });
                }
            }

            return next();
        }
    }, {
        key: 'validateObject',
        value: function validateObject() {}
    }]);

    return Validator;
}();

exports.default = Validator;

/***/ })
/******/ ]);
});