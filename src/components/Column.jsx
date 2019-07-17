import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';

import '../css/column.css';

export default class Column extends Component {

    makeColumnEditable = e => {
        e.target.contentEditable = true;
    }

    editColumn = e => {
        if (e.keyCode === 13 || e.type === 'blur') {
            e.target.contentEditable = false;

            const newTitle = e.target.innerText;
            const newColumn = {
                ...this.props.column,
                title: newTitle,
            }

            this.props.editColumn(newColumn);
        }
        return;
    }

    addCard = () => {
        const columnId = this.props.column.id;
        this.props.addCard(columnId);
    }

    render() {
        return (
            <div className={`column ${this.props.columnClassName ? this.props.columnClassName : ''}`} >
                <h3
                    className={`title`}
                    onDoubleClick={this.makeColumnEditable}
                    onBlur={this.editColumn}
                    onKeyDown={ this.editColumn }
                >
                    {this.props.column.title}
                </h3>
                <Droppable
                    droppableId={this.props.column.id}
                    isDropDisabled={this.props.isDropDisabled}
                >

                    {(provided, snapshot) => {

                        const style = {
                            ...provided.droppableProps.style,
                            transition: 'background-color 0.2s ease',
                            backgroundColor: snapshot.isDraggingOver ? '#EFEFEF' : 'white',
                            ...this.props.onDragStyle,
                        };

                        return (
                            <div
                                {...provided.droppableProps}

                                ref={provided.innerRef}
                                isdraggingover={snapshot.isDraggingOver.toString()}
                                style={style}
                                className={`card-list ${this.props.cardListClassName ? this.props.cardListClassName : ''}`}
                            >

                                {
                                    this.props.cards.map((card, index) => <Card key={card.id} 
                                                                            card={card} 
                                                                            index={index} 
                                                                            renderer={this.props.renderer} 
                                                                            editCard={this.props.editCard}
                                                                        />)}
                                {provided.placeholder}
                            </div>)
                    }}
                </Droppable>
                <button className="btn__add-card" type="button" onClick={ this.addCard }>Add Card</button>
            </div>
        )
    }
}
