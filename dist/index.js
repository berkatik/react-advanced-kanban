"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _DefaultRenderer = require("./components/DefaultRenderer");

var _Column = _interopRequireDefault(require("./components/Column"));

require("./css/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Kanban =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Kanban, _React$Component);

  function Kanban() {
    _classCallCheck(this, Kanban);

    return _possibleConstructorReturn(this, _getPrototypeOf(Kanban).apply(this, arguments));
  }

  _createClass(Kanban, [{
    key: "render",
    value: function render() {
      var _this = this;

      return _react["default"].createElement("div", {
        id: "board"
      }, _react["default"].createElement(_reactBeautifulDnd.DragDropContext, {
        onDragStart: this.props.onDragStart,
        onDragUpdate: this.props.onDragUpdate,
        onDragEnd: this.props.onDragEnd,
        onBeforeDragStart: this.props.onBeforeDragStart,
        className: this.props.className
      }, _react["default"].createElement("div", {
        className: "container__columns ".concat(this.props.columnContianerClass ? this.props.columnContianerClass : '')
      }, this.props.data.columnOrder.map(function (columnId) {
        var column = _this.props.data.columns[columnId];
        var cards = column.cardIds.map(function (cardId) {
          return _this.props.data.cards.find(function (card) {
            return card["id"] === cardId;
          });
        });
        return _react["default"].createElement(_Column["default"], {
          key: column.id,
          column: column,
          cards: cards,
          addCard: _this.props.addCard,
          editCard: _this.props.editCard,
          editColumn: _this.props.editColumn,
          renderer: _this.props.renderer ? _this.props.renderer : _DefaultRenderer.DefaultRenderer
        });
        /**
         * @props   # key: to keep track of the columns created
         *          # column: to pass column data
         *          # cards: to pass the cards of the column
         */
      }))), this.props.addColumn ? _react["default"].createElement("button", {
        id: "btn__add-column",
        type: "button",
        onClick: this.props.addColumn
      }, "Add Column") : null);
    }
  }]);

  return Kanban;
}(_react["default"].Component);

exports["default"] = Kanban;