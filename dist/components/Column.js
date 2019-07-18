"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _Card = _interopRequireDefault(require("./Card"));

require("../css/column.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Column =
/*#__PURE__*/
function (_Component) {
  _inherits(Column, _Component);

  function Column() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Column);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Column)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "makeColumnEditable", function (e) {
      e.target.contentEditable = true;
    });

    _defineProperty(_assertThisInitialized(_this), "editColumn", function (e) {
      if (e.keyCode === 13 || e.type === 'blur') {
        e.target.contentEditable = false;
        var newTitle = e.target.innerText;

        var newColumn = _objectSpread({}, _this.props.column, {
          title: newTitle
        });

        _this.props.editColumn(newColumn);
      }

      return;
    });

    _defineProperty(_assertThisInitialized(_this), "addCard", function () {
      var columnId = _this.props.column.id;

      _this.props.addCard(columnId);
    });

    return _this;
  }

  _createClass(Column, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement("div", {
        className: "column ".concat(this.props.columnClassName ? this.props.columnClassName : '')
      }, _react["default"].createElement("h3", {
        className: "title__column",
        onDoubleClick: this.makeColumnEditable,
        onBlur: this.editColumn,
        onKeyDown: this.editColumn
      }, this.props.column.title), _react["default"].createElement(_reactBeautifulDnd.Droppable, {
        droppableId: this.props.column.id,
        isDropDisabled: this.props.isDropDisabled
      }, function (provided, snapshot) {
        var style = _objectSpread({}, provided.droppableProps.style, {
          transition: 'background-color 0.2s ease',
          backgroundColor: snapshot.isDraggingOver ? '#EFEFEF' : 'white'
        }, _this2.props.onDragStyle);

        return _react["default"].createElement("div", _extends({}, provided.droppableProps, {
          ref: provided.innerRef,
          isdraggingover: snapshot.isDraggingOver.toString(),
          style: style,
          className: "card-list ".concat(_this2.props.cardListClassName ? _this2.props.cardListClassName : '')
        }), _this2.props.cards.map(function (card, index) {
          return _react["default"].createElement(_Card["default"], {
            key: card.id,
            card: card,
            index: index,
            renderer: _this2.props.renderer,
            editCard: _this2.props.editCard
          });
        }), provided.placeholder);
      }), this.props.addCard ? _react["default"].createElement("button", {
        className: "btn__add-card",
        type: "button",
        onClick: this.addCard
      }, "Add Card") : null);
    }
  }]);

  return Column;
}(_react.Component);

exports["default"] = Column;