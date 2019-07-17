import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd';

import "../css/card.css"

// Since it does not holds state, we might turn it into a stateless function component
export default class card extends Component {
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
                        className={`container__card ${this.props.cardClassName ? this.props.cardClassName : ''}`}
                        ref={provided.innerRef}
                        isdragging={snapshot.isDragging.toString()}// TODO:
                    >
                        { this.props.renderer(
                            this.props.card,
                            this.props.editCard, 
                            this.props.index ) 
                        }
                    </div>)
                }}
            </Draggable>
        );
    }
}