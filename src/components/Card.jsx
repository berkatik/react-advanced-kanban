import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Draggable } from 'react-beautiful-dnd';

import DefaultRenderer from './DefaultRenderer';

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
                        className={`card ${this.props.cardClassName}`}
                        ref={provided.innerRef}
                        isdragging={snapshot.isDragging.toString()}// TODO:
                    >
                        {this.props.renderer(this.props.card.id, this.props.card.content, this.props.editCard, this.props.index)}
                        {/* <DefaultRenderer 
                            id={this.props.card.id}
                            content={this.props.card.content}
                            editCard={this.props.editCard}
                            index={ this.props.index }
                            ></DefaultRenderer> */}
                    </div>)
                }}
            </Draggable>
        );
    }
}