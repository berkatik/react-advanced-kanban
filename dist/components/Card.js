"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

require("../css/card.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Since it does not holds state, we might turn it into a stateless function component
class card extends _react.Component {
  render() {
    return _react.default.createElement(_reactBeautifulDnd.Draggable, {
      draggableId: this.props.card.id,
      index: this.props.index,
      onClick: this.props.onClick,
      isDragDisabled: this.props.isDragDisabled,
      disableInteractiveElementBlocking: this.disableInteractiveElementBlocking,
      shouldRespectForcePress: this.shouldRespectForcePress
    }, (provided, snapshot) => {
      var style = _objectSpread({}, provided.draggableProps.style, {
        boxShadow: snapshot.isDragging ? '0 5px 10px 0 rgba(0, 0, 0, 0.2)' : 'none'
      }, this.props.onDragStyle);

      return _react.default.createElement("div", _extends({}, provided.draggableProps, provided.dragHandleProps, {
        style: snapshot.isDragging ? style : provided.draggableProps.style,
        className: "container__card ".concat(this.props.cardClassName ? this.props.cardClassName : ''),
        ref: provided.innerRef,
        isdragging: snapshot.isDragging.toString() // TODO:

      }), this.props.renderer(this.props.card, this.props.editCard, this.props.index));
    });
  }

}

exports.default = card;