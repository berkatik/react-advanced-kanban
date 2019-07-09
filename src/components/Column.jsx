import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';

import '../css/column.css';

export default class Column extends Component {

    static propTypes = {
        headingClassName: PropTypes.string,
        cardListClassName: PropTypes.string,
        columnClassName: PropTypes.string,
        onDragStyle: PropTypes.object,
        isDropDisabled: PropTypes.bool,
        isCombineEnabled: PropTypes.bool,
    }

    onDoubleClick = e => {
        e.target.contentEditable = true;
    }

    onBlur = e => {
        e.target.contentEditable = false;

        const newVal = e.target.innerText;
        this.props.column.title = newVal;
    }

    // onCardDoubleClick = e => {
    //     if (e.target.firstElementChild) {
    //         e.target.firstElementChild.contentEditable = true;
    //     } else {
    //         e.target.contentEditable = true;
    //     }
    // }

    // onCardBlur = e => {
    //     e.target.contentEditable = false;

    //     const newVal = e.target.innerText;
    //     // this.props.card.content = newVal;
    //     console.log(this.props)

    // }

    addCard = () => {
        /*
        console.log(this.props);
        debugger;
        

        const newCard = {
            id: `task-${this.props.cards.length + 1}`,
            content: '',
        }

        this.props.cards.push(newCard);
        this.props.column.cardIds.push(newCard.id);


        this.forceUpdate()
        */

        const columnId = this.props.column.id;
        this.props.addCard(columnId);
    }

    render() {
        return (
            <div className={`column ${this.props.columnClassName}`} >
                <h3
                    className={`title ${this.props.columnClassName}`}
                    onDoubleClick={this.onDoubleClick}
                    onBlur={this.onBlur}
                >
                    {this.props.column.title}
                </h3>
                <Droppable
                    droppableId={this.props.column.id}
                    isDropDisabled={this.props.isDropDisabled}
                    isCombineEnabled={this.props.isCombineEnabled}
                >

                    {(provided, snapshot) => {

                        const style = {
                            ...provided.droppableProps.style,
                            transition: 'background-color 0.2s ease',
                            backgroundColor: snapshot.isDraggingOver ? 'blue' : 'white',
                            ...this.props.onDragStyle,
                        };

                        return (
                            <div
                                {...provided.droppableProps}

                                ref={provided.innerRef}
                                isdraggingover={snapshot.isDraggingOver.toString()}
                                style={style}
                                className={`card-list ${this.props.cardListClassName}`}
                            >
                                {
                                    this.props.cards.map((card, index) => <Card key={card.id} 
                                                                            card={card} 
                                                                            index={index} 
                                                                            onDoubleClick={this.onCardDoubleClick} 
                                                                            onBlur={this.onCardBlur}
                                                                            renderer={this.props.renderer} 
                                                                        />)}
                                {provided.placeholder}
                            </div>)
                    }}
                </Droppable>
                <button type="button" onClick={ this.addCard }>Add Card</button>
            </div>
        )
    }
}
