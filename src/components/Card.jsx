import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Draggable } from 'react-beautiful-dnd';

import "../css/card.css"

// Since it does not holds state, we might turn it into a stateless function component
export default class card extends Component {
    makeCardEditable = e => {
        if (e.target.firstElementChild) {
            e.target.firstElementChild.contentEditable = true;
        } else {
            e.target.contentEditable = true;
        }
    }

    editCard = e => {
        e.target.contentEditable = false;

        const newContent = e.target.innerText;
        const newCard = {
            ...this.props.card,
            content: newContent
        }

        this.props.editCard(newCard);
    }

    render() {
        return (
            <Draggable
                draggableId={this.props.card.id}
                index={this.props.index}
                onClick={this.props.onClick}
                isDragDisabled={this.props.isDragDisabled}
                disableInteractiveElementBlocking={this.disableInteractiveElementBlocking}
                shouldRespectForcePress={this.shouldRespectForcePress}
            >
                {(provided, snapshot) => {

                    const style = {
                        ...provided.draggableProps.style,
                        boxShadow: snapshot.isDragging ? '0 5px 10px 0 rgba(0, 0, 0, 0.2)' : 'none',
                        ...this.props.onDragStyle,
                    };

                    return (<div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={snapshot.isDragging ? style : provided.draggableProps.style}
                        className={`card ${this.props.cardClassName}`}
                        ref={provided.innerRef}
                        isdragging={snapshot.isDragging.toString()}// TODO:
                        onDoubleClick={this.makeCardEditable}
                        onBlur={this.editCard}
                    >
                        {/* { this.props.card.content } */}
                        {this.props.renderer(this.props.card)}
                    </div>)
                }}
            </Draggable>
        );
    }
}