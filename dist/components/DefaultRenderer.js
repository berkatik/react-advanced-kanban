"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultRenderer = void 0;

var _react = _interopRequireDefault(require("react"));

require("../css/defaultRenderer.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var makeCardTitleEditable = function makeCardTitleEditable(id) {
  document.getElementById("title__card-".concat(id)).contentEditable = true;
};

var editCardTitle = function editCardTitle(id, editCardState, e) {
  if (e.keyCode === 13 || e.type === 'blur') {
    document.getElementById("title__card-".concat(id)).contentEditable = false;
    var newTitle = document.getElementById("title__card-".concat(id)).innerText;
    var currentContent = document.getElementById("content__card-".concat(id)).innerText;
    var newCard = {
      id: id,
      title: newTitle,
      content: currentContent
    };
    editCardState(newCard);
  }
};

var makeCardContentEditable = function makeCardContentEditable(id) {
  document.getElementById("content__card-".concat(id)).contentEditable = true;
};

var editCardContent = function editCardContent(id, editCardState, e) {
  if (e.keyCode === 13 || e.type === 'blur') {
    document.getElementById("content__card-".concat(id)).contentEditable = false;
    var currentTitle = document.getElementById("title__card-".concat(id)).innerText;
    var newContent = document.getElementById("content__card-".concat(id)).innerText;
    var newCard = {
      id: id,
      title: currentTitle,
      content: newContent
    };
    editCardState(newCard);
  }
};

var DefaultRenderer = function DefaultRenderer(card, editCardState, index) {
  return _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("h3", {
    id: "title__card-".concat(card.id),
    className: "title",
    onDoubleClick: function onDoubleClick() {
      makeCardTitleEditable(card.id);
    },
    onBlur: function onBlur(e) {
      editCardTitle(card.id, editCardState, e);
    },
    onKeyDown: function onKeyDown(e) {
      editCardTitle(card.id, editCardState, e);
    }
  }, card.title), _react["default"].createElement("p", {
    id: "content__card-".concat(card.id),
    className: "content",
    onDoubleClick: function onDoubleClick() {
      makeCardContentEditable(card.id);
    },
    onBlur: function onBlur(e) {
      editCardContent(card.id, editCardState, e);
    },
    onKeyDown: function onKeyDown(e) {
      editCardContent(card.id, editCardState, e);
    }
  }, card.content));
};

exports.DefaultRenderer = DefaultRenderer;