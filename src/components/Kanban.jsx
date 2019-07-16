import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { PropTypes } from 'prop-types';

import { DefaultRenderer } from './DefaultRenderer';
import Column from './Column';
import '../css/index.css';
export default class Kanban extends React.Component {
    // static propTypes = {
    //     // DragDropContext container
    //     onDragStart: PropTypes.func,
    //     onDragUpdate: PropTypes.func,
    //     onDragEnd: PropTypes.func,
    //     onBeforeDragStart: PropTypes.func,
    //     className: PropTypes.string,
    //     data: PropTypes.object,
    //     columnContianerClass: PropTypes.string,

    //     columnSettings: PropTypes.shape({
    //         headingClassName: PropTypes.string,
    //         cardListClassName: PropTypes.string,
    //         columnClassName: PropTypes.string,
    //         onDragStyle: PropTypes.object,
    //         isDropDisabled: PropTypes.bool,
    //         isCombineEnabled: PropTypes.bool,
    //     }),

    //     cardSettings: PropTypes.shape({
    //         cardClassName: PropTypes.string,
    //         index: PropTypes.number.isRequired,
    //         onDragStyle: PropTypes.object,
    //         onClick: PropTypes.func,
    //         isDragDisabled: PropTypes.bool,
    //         disableInteractiveElementBlocking: PropTypes.bool,
    //         shouldRespectForcePress: PropTypes.bool,
    //     })
    // };

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
                    <div className={`container__columns ${this.props.columnContianerClass}`}>
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
                <button id="btn__add-column" type="button" onClick={this.props.addColumn}>Add Column</button>
            </div>
        )
    }
}