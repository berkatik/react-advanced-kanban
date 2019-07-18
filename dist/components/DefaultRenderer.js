"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultRenderer = void 0;

var _react = _interopRequireDefault(require("react"));

require("../css/defaultRenderer.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeCardTitleEditable = id => {
  document.getElementById("title__card-".concat(id)).contentEditable = true;
};

var editCardTitle = (id, editCardState, e) => {
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

var makeCardContentEditable = id => {
  document.getElementById("content__card-".concat(id)).contentEditable = true;
};

var editCardContent = (id, editCardState, e) => {
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

var DefaultRenderer = (card, editCardState, index) => {
  return _react.default.createElement("div", {
    className: "card"
  }, _react.default.createElement("h3", {
    id: "title__card-".concat(card.id),
    className: "title",
    onDoubleClick: () => {
      makeCardTitleEditable(card.id);
    },
    onBlur: e => {
      editCardTitle(card.id, editCardState, e);
    },
    onKeyDown: e => {
      editCardTitle(card.id, editCardState, e);
    }
  }, card.title), _react.default.createElement("p", {
    id: "content__card-".concat(card.id),
    className: "content",
    onDoubleClick: () => {
      makeCardContentEditable(card.id);
    },
    onBlur: e => {
      editCardContent(card.id, editCardState, e);
    },
    onKeyDown: e => {
      editCardContent(card.id, editCardState, e);
    }
  }, card.content));
};

exports.DefaultRenderer = DefaultRenderer;