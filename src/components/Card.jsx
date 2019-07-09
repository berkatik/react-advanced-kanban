import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Draggable } from 'react-beautiful-dnd';

import "../css/card.css"

// Since it does not holds state, we might turn it into a stateless function component
export default class card extends Component {
    static propTypes = {
        card: PropTypes.object.isRequired,
        cardClassName: PropTypes.string,
        index: PropTypes.number.isRequired,
        onDragStyle: PropTypes.object,
        onClick: PropTypes.func,
        isDragDisabled: PropTypes.bool,
        disableInteractiveElementBlocking: PropTypes.bool,
        shouldRespectForcePress: PropTypes.bool,
    }

    onDoubleClick = e => {
        e.target.contentEditable = true;
    }

    onBlur = e => {
        e.target.contentEditable = false;

        const newVal = e.target.innerText;
        this.props.card.content = newVal;
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
                        // backgroundColor: snapshot.isDragging ? 'lightgreen' : 'white',
                        backgroundColor: 'lightgreen',
                        ...this.props.onDragStyle,
                    };

                    return (<div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={snapshot.isDragging ? style : provided.draggableProps.style}
                        className={`card ${this.props.cardClassName}`}
                        ref={provided.innerRef}
                        isdragging={snapshot.isDragging.toString()}// TODO:
                        onDoubleClick={this.onDoubleClick}
                        onBlur={this.onBlur}
                    >
                        {/* { this.props.card.content } */}
                        {this.props.renderer(this.props.card)}
                    </div>)
                }}
            </Draggable>
        );
    }
}