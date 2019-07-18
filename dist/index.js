"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _DefaultRenderer = require("./components/DefaultRenderer");

var _Column = _interopRequireDefault(require("./components/Column"));

require("./css/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Kanban extends _react.default.Component {
  render() {
    return _react.default.createElement("div", {
      id: "board"
    }, _react.default.createElement(_reactBeautifulDnd.DragDropContext, {
      onDragStart: this.props.onDragStart,
      onDragUpdate: this.props.onDragUpdate,
      onDragEnd: this.props.onDragEnd,
      onBeforeDragStart: this.props.onBeforeDragStart,
      className: this.props.className
    }, _react.default.createElement("div", {
      className: "container__columns ".concat(this.props.columnContianerClass ? this.props.columnContianerClass : '')
    }, this.props.data.columnOrder.map(columnId => {
      var column = this.props.data.columns[columnId];
      var cards = column.cardIds.map(cardId => {
        return this.props.data.cards.find(card => card["id"] === cardId);
      });
      return _react.default.createElement(_Column.default, {
        key: column.id,
        column: column,
        cards: cards,
        addCard: this.props.addCard,
        editCard: this.props.editCard,
        editColumn: this.props.editColumn,
        renderer: this.props.renderer ? this.props.renderer : _DefaultRenderer.DefaultRenderer
      });
      /**
       * @props   # key: to keep track of the columns created
       *          # column: to pass column data
       *          # cards: to pass the cards of the column
       */
    }))), this.props.addColumn ? _react.default.createElement("button", {
      id: "btn__add-column",
      type: "button",
      onClick: this.props.addColumn
    }, "Add Column") : null);
  }

}

exports.default = Kanban;