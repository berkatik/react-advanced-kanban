import React, { Component } from 'react'

import Kanban from './Kanban'
import { initialData } from '../initialData.js';

export default class App extends Component {
    state = initialData;

    onDragStart = start => {

        if (this.state.onDragStart) {
            this.state.onDragStart();
        }
    }

    onBeforeDragStart = update => {
        // Do something..
    }

    onDragUpdate = update => {

        if (this.state.onDragUpdate) {
            this.state.onDragUpdate();
        }
    }

    onDragEnd = result => {

        const { destination, source, draggableId } = result;

        if (!destination) return;

        if (destination.droppableId === source.droppableId && destination.index === source.index) return;

        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        if (start === finish) {
            const newCardIds = Array.from(start.cardIds);
            newCardIds.splice(source.index, 1);
            newCardIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                cardIds: newCardIds,
            };

            const newState = {
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn
                }
            };

            this.setState(newState);
            return;
        }

        const startCardIds = Array.from(start.cardIds);
        startCardIds.splice(source.index, 1);
        const newStart = {
            ...start,
            cardIds: startCardIds,
        }

        const finishCardIds = Array.from(finish.cardIds);
        finishCardIds.splice(destination.index, 0, draggableId);

        const newFinish = {
            ...finish,
            cardIds: finishCardIds,
        }

        const newState = {
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            }
        }

        this.setState(newState);

        return;
    }

    addCard = (columnId) => {
        const newCard = {
            id: `task-${this.state.cards.length + 1}`,
            content: 'New Card',
        }

        this.state.cards.push(newCard);
        this.state.columns[columnId].cardIds.push(newCard.id);

        this.setState(this.state);
    }

    addColumn = () => {
        const newColumn = {
            id: `column-${this.state.columnOrder.length + 1}`,
            title: 'New Column',
            cardIds: [],
        }

        const newState = this.state;

        newState.columns[newColumn.id] = newColumn;
        newState.columnOrder.push(newColumn.id);

        this.setState(newState);
    }

    editCard = (editedCard) => {
        let cardIndex;
        const newState = this.state;

        this.state.cards.map((card, index) => {
            if (card.id === editedCard.id) {
                cardIndex = index;
            }
        })

        newState.cards[cardIndex] = editedCard;
        this.setState(newState);
    }

    editColumn = (editedColumn) => {
        const newState = this.state;
        newState.columns[editedColumn.id] = editedColumn;

        this.setState(newState);
    }

    render() {
        return (
            <Kanban 
                data={ this.state } 
                addCard={ this.addCard } 
                addColumn={ this.addColumn } 
                editCard={ this.editCard } 
                editColumn={ this.editColumn }
                onDragStart={ this.onDragStart }
                onDragUpdate={ this.onDragUpdate }
                onDragEnd={ this.onDragEnd }
                onBeforeDragStart={this.onBeforeDragStart }
            ></Kanban>
        )
    }
}
