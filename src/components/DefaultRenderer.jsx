import React from 'react'


const makeCardEditable = (id) => {
    document.getElementById(`content-${id}`).contentEditable = true;
}

const editCard = (id, editCardState, e) => {
    if (e.keyCode === 13 || e.type === 'blur') {
        document.getElementById(`content-${id}`).contentEditable = false;

        const newContent = document.getElementById(`content-${id}`).innerText;
        const newCard = {
            id: id,
            content: newContent
        }
        editCardState(newCard);
    }
    return;
}

export const DefaultRenderer = (id, content, editCardState, index) => {
    return(
        <div id={`content-${id}`}
            onDoubleClick={() => {makeCardEditable(id)}}
            onBlur={e => { editCard(id, editCardState, e) }}
            onKeyDown={e => { editCard(id, editCardState, e) }}
        >
            {content}
        </div>
    )
}