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

var Content = function (_React$Component) {
    (0, _inherits3.default)(Content, _React$Component);

    function Content() {
        (0, _classCallCheck3.default)(this, Content);
        return (0, _possibleConstructorReturn3.default)(this, (Content.__proto__ || (0, _getPrototypeOf2.default)(Content)).apply(this, arguments));
    }

    (0, _createClass3.default)(Content, [{
        key: 'render',
        value: function render() {
            var i = 1;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
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
    return Content;
}(_react2.default.Component);

exports.default = Content;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkZXZcXFJlYWN0VHV0b3JpYWxzXFxwYWdlc1xcY29udGVudC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJoMSIsImZvbnRTaXplIiwiY29sb3IiLCJDb250ZW50IiwiaSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsU0FBUztBQUNYQyxRQUFHO0FBQ0NDLGtCQUFVLE9BRFg7QUFFQ0MsZUFBTTtBQUZQO0FBRFEsQ0FBZjs7SUFPcUJDLE87Ozs7Ozs7Ozs7aUNBQ1I7QUFDTCxnQkFBSUMsSUFBSSxDQUFSO0FBQ0EsbUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQUVJO0FBQUE7QUFBQSxzQkFBRyxvQkFBaUIsV0FBcEI7QUFBQTtBQUFBLGlCQUZKO0FBR0k7QUFBQTtBQUFBLHNCQUFJLFdBQVcsZ0JBQU1MLE9BQU9DLEVBQWIsQ0FBZjtBQUFrQ0kseUJBQUcsQ0FBSCxHQUFLLE1BQUwsR0FBWTtBQUE5QztBQUhKLGFBREo7QUFPSDs7O0VBVmdDLGdCQUFNQyxTOztrQkFBdEJGLE8iLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9kZXYvUmVhY3RUdXRvcmlhbHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzdHlsZSB9IGZyb20gJ25leHQvY3NzJztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGgxOntcclxuICAgICAgICBmb250U2l6ZTogJzEwMHB4JyxcclxuICAgICAgICBjb2xvcjonI0ZGMDAwMCdcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgaSA9IDE7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMT5Db250ZW50PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGRhdGEtbXlhdHRyaWJ1dGU9XCJzb21ldmFsdWVcIj5UaGlzIGlzIHRoZSBjb250ZW50ISEhPC9wPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLmgxKX0+e2k9PTE/J1RydWUnOidGYWxzZSd9PC9oMT4gICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19