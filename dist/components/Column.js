"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _Card = _interopRequireDefault(require("./Card"));

require("../css/column.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Column extends _react.Component {
  constructor() {
    super(...arguments);

    this.makeColumnEditable = e => {
      e.target.contentEditable = true;
    };

    this.editColumn = e => {
      if (e.keyCode === 13 || e.type === 'blur') {
        e.target.contentEditable = false;
        var newTitle = e.target.innerText;

        var newColumn = _objectSpread({}, this.props.column, {
          title: newTitle
        });

        this.props.editColumn(newColumn);
      }

      return;
    };

    this.addCard = () => {
      var columnId = this.props.column.id;
      this.props.addCard(columnId);
    };
  }

  render() {
    return _react.default.createElement("div", {
      className: "column ".concat(this.props.columnClassName ? this.props.columnClassName : '')
    }, _react.default.createElement("h3", {
      className: "title__column",
      onDoubleClick: this.makeColumnEditable,
      onBlur: this.editColumn,
      onKeyDown: this.editColumn
    }, this.props.column.title), _react.default.createElement(_reactBeautifulDnd.Droppable, {
      droppableId: this.props.column.id,
      isDropDisabled: this.props.isDropDisabled
    }, (provided, snapshot) => {
      var style = _objectSpread({}, provided.droppableProps.style, {
        transition: 'background-color 0.2s ease',
        backgroundColor: snapshot.isDraggingOver ? '#EFEFEF' : 'white'
      }, this.props.onDragStyle);

      return _react.default.createElement("div", _extends({}, provided.droppableProps, {
        ref: provided.innerRef,
        isdraggingover: snapshot.isDraggingOver.toString(),
        style: style,
        className: "card-list ".concat(this.props.cardListClassName ? this.props.cardListClassName : '')
      }), this.props.cards.map((card, index) => _react.default.createElement(_Card.default, {
        key: card.id,
        card: card,
        index: index,
        renderer: this.props.renderer,
        editCard: this.props.editCard
      })), provided.placeholder);
    }), this.props.addCard ? _react.default.createElement("button", {
      className: "btn__add-card",
      type: "button",
      onClick: this.addCard
    }, "Add Card") : null);
  }

}

exports.default = Column;