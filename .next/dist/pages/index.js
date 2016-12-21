'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('D:\\dev\\ReactTutorials\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('D:\\dev\\ReactTutorials\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('D:\\dev\\ReactTutorials\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('D:\\dev\\ReactTutorials\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('D:\\dev\\ReactTutorials\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('D:\\dev\\ReactTutorials\\node_modules\\react\\react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('D:\\dev\\ReactTutorials\\node_modules\\next\\dist\\lib\\css.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    h1: {
        fontSize: '100px',
        color: '#FF0000'
    }
};

var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            var i = 1;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'Header'
                ),
                _react2.default.createElement(
                    'h2',
                    null,
                    'Content'
                ),
                _react2.default.createElement(
                    'p',
                    { 'data-myattribute': 'somevalue' },
                    'This is the content!!!'
                ),
                _react2.default.createElement(
                    'h1',
                    { className: (0, _css.style)(styles.h1) },
                    i == 1 ? 'True' : 'False'
                )
            );
        }
    }]);
    return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkZXZcXFJlYWN0VHV0b3JpYWxzXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOlsic3R5bGVzIiwiaDEiLCJmb250U2l6ZSIsImNvbG9yIiwiaSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsU0FBUztBQUNYQyxRQUFHO0FBQ0NDLGtCQUFVLE9BRFg7QUFFQ0MsZUFBTTtBQUZQO0FBRFEsQ0FBZjs7Ozs7Ozs7Ozs7O2lDQU9hO0FBQ0wsZ0JBQUlDLElBQUksQ0FBUjtBQUNBLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBR0k7QUFBQTtBQUFBLHNCQUFHLG9CQUFpQixXQUFwQjtBQUFBO0FBQUEsaUJBSEo7QUFJSTtBQUFBO0FBQUEsc0JBQUksV0FBVyxnQkFBTUosT0FBT0MsRUFBYixDQUFmO0FBQWtDRyx5QkFBRyxDQUFILEdBQUssTUFBTCxHQUFZO0FBQTlDO0FBSkosYUFESjtBQVFIOzs7RUFYd0IsZ0JBQU1DLFMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRDovZGV2L1JlYWN0VHV0b3JpYWxzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc3R5bGUgfSBmcm9tICduZXh0L2Nzcyc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBoMTp7XHJcbiAgICAgICAgZm9udFNpemU6ICcxMDBweCcsXHJcbiAgICAgICAgY29sb3I6JyNGRjAwMDAnXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGkgPSAxO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDE+SGVhZGVyPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMj5Db250ZW50PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGRhdGEtbXlhdHRyaWJ1dGU9XCJzb21ldmFsdWVcIj5UaGlzIGlzIHRoZSBjb250ZW50ISEhPC9wPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLmgxKX0+e2k9PTE/J1RydWUnOidGYWxzZSd9PC9oMT4gICAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0=