import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { DefaultRenderer } from './components/DefaultRenderer';
import Column from './components/Column';
import './css/index.css';
export default class Kanban extends React.Component {

    render() {
        return (
            <div id="board">
                <DragDropContext
                    onDragStart={this.props.onDragStart}
                    onDragUpdate={this.props.onDragUpdate}
                    onDragEnd={this.props.onDragEnd}
                    onBeforeDragStart={this.props.onBeforeDragStart}
                    className={this.props.className}
                >
                    <div className={`container__columns ${this.props.columnContianerClass ? this.props.columnContianerClass : ''}`}>
                        {this.props.data.columnOrder.map(columnId => {
                            const column = this.props.data.columns[columnId];
                            const cards = column.cardIds.map(cardId => {
                                return this.props.data.cards.find(card => card["id"] === cardId)
                            })

                            return <Column 
                                    key={column.id} 
                                    column={column} 
                                    cards={cards} 
                                    addCard={this.props.addCard} 
                                    editCard={this.props.editCard} 
                                    editColumn={this.props.editColumn} 
                                    renderer={this.props.renderer ? this.props.renderer : DefaultRenderer} />
                            /**
                             * @props   # key: to keep track of the columns created
                             *          # column: to pass column data
                             *          # cards: to pass the cards of the column
                             */
                        })}
                    </div>
                </DragDropContext>
                {this.props.addColumn ? <button id="btn__add-column" type="button" onClick={this.props.addColumn}>Add Column</button> : null}
                
            </div>
        )
    }
}