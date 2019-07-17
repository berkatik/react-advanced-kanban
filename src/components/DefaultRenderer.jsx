import React from 'react'

import '../css/defaultRenderer.css'

const makeCardTitleEditable = id => {
    document.getElementById(`title__card-${id}`).contentEditable = true;
}

const editCardTitle = (id, editCardState, e) => {
    if (e.keyCode === 13 || e.type === 'blur') {
        document.getElementById(`title__card-${id}`).contentEditable = false;

        const newTitle = document.getElementById(`title__card-${id}`).innerText;
        const currentContent = document.getElementById(`content__card-${id}`).innerText;
        const newCard = {
            id: id,
            title: newTitle,
            content: currentContent,
        }


        editCardState(newCard);
    }
}

const makeCardContentEditable = id => {
    document.getElementById(`content__card-${id}`).contentEditable = true;
}


const editCardContent = (id, editCardState, e) => {
    if (e.keyCode === 13 || e.type === 'blur') {
        document.getElementById(`content__card-${id}`).contentEditable = false;

        const currentTitle = document.getElementById(`title__card-${id}`).innerText;
        const newContent = document.getElementById(`content__card-${id}`).innerText;
        const newCard = {
            id: id,
            title: currentTitle,
            content: newContent,
        }

        editCardState(newCard);
    }
}

export const DefaultRenderer = (card, editCardState, index) => {
    return(
        <div className="card">
            <h3 id={`title__card-${card.id}`}
                className="title"
                onDoubleClick={() => { makeCardTitleEditable(card.id) }}
                onBlur={e => { editCardTitle(card.id, editCardState, e) }}
                onKeyDown={e => { editCardTitle(card.id, editCardState, e) }}
            >{card.title}</h3>

            <p id={`content__card-${card.id}`}
                className="content"
                onDoubleClick={() => { makeCardContentEditable(card.id) }}
                onBlur={e => { editCardContent(card.id, editCardState, e) }}
                onKeyDown={e => { editCardContent(card.id, editCardState, e) }}
            >{card.content}</p>
        </div>
    )
}