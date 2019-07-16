import React, { Component } from 'react'

/*
export default class DefaultRenderer extends Component {
    makeCardEditable = e => {
        document.getElementById(`content-${ this.props.index }`).contentEditable = true;
    }

    editCard = e => {
        // TODO: Save when hit enter
        if(e.keyCode === 13 || e.type === 'blur') {
            document.getElementById(`content-${this.props.index}`).contentEditable = false;

            const newContent = document.getElementById(`content-${this.props.index}`).innerText;
            const newCard = {
                id: this.props.id,
                content: newContent
            }
            this.props.editCard(newCard);
        } 
        return;
    }

    render() {
        return (
            <div id={`content-${this.props.index}`}
                onDoubleClick={ this.makeCardEditable }
                onBlur={ this.editCard }
                onKeyDown={ this.editCard }
                >
                { this.props.content }
            </div>
        )
    }
}
*/


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