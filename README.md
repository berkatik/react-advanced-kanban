# React Advanced Kanban

React Advanced Kanban is a React compoenent that is builded with react-beautiful-dnd. It is developed to be fairly flexible component, you can even render your own component as a Card.

## Installation
```
npm i react-advanced-kanban
```
```
import Kanban from 'react-advanced-kanban';
```

## Example Usage
```
import React, { Component } from 'react';
import { render } from 'react-dom';
import Kanban

export default class App extends Component {
    state = {
        "cards": [
            {
                "id": 'task-1', 
                "title": 'Take out the garbage',
                "content": 'Take the garbage from the kitchen and take it out to the dumpster on the street.'
            },
            {
                "id": 'task-2',
                "title": 'Take dog out for a walk',
                "content": 'Dog needs to take a walk every morning before going to work, do not forget it!'
            },
        ],
        "columns": {
            "column-1": {
                id: "column-1",
                title: 'To-do',
                cardIds: ['task-1', 'task-2'],
            },
            "column-2": {
                id: "column-2",
                title: 'Done',
                cardIds: [],
            }
        },
        "columnOrder": ["column-1", "column-2"]
    }


    render() {
        return (
            <Kanban 
                data={ this.state } 
            ></Kanban>
        )
    }
}


```

## Required Data Structure Example
Kanban needs to have a base structure like below to work properly. We are working on to make it as flexible as possible. Below is the base structure of the data needed.

```
"cards": [
        {
            "id": 'task-1',

            // Other stuff..
        },
        {
            "id": 'task-2',

            // Other stuff..
        },
    ],
    "columns": {
        "column-1": {
            id: "column-1",
            title: 'To-do',
            cardIds: ['task-1', 'task-2'],
        },
        "column-2": {
            id: "column-2",
            title: 'Done',
            cardIds: [],
        }
    },
    "columnOrder": ["column-1", "column-2"]
}
```

Since you render your own component inside cards, **you can give whatever you need as long as the cards have an id**. 

Kanban builds its structure from _columns_ . _cardIds_ array inside the column objects are used to determine what card belongs to where and how they are arranged.
_columnOrder_ array inside the columns object is used to show which columns to show and column order.
But keep in mind, **you need to follow the columns structure** so it can work properly.

## Props

- **data:**  **_Required_**. Data used by Kanban to render the columns and cards. Needs to follow rules above.
- **addCard:** Method used to update the state and add new card to the data. If it is given, "Add Card" button will show up at the bottom of the each column. If not given, "Add Card" button will not be rendered.
- **addColumn:** Method used to update the state and add new column to the data. If it is given, "Add Column" button will show up at the right side of the right most column. If not given, "Add Column" button will not rendered. Be careful to follow the required data structure.
- **editCard:** Method used to update the state according to edited card.
- **editColumn:** Method used to update the state according to edited column.
- **onDragStart:** Method executed when a card is started to being dragged.
- **onDragUpdate:** Method executed when the card that is being dragged is moved.
- **onDragEnd:** Method executed when the card that is being dragged is dropped.
- **onBeforeDragStart:** Method executed right before a card is started to being dragged.
- **renderer:** A react component that controls how you render your data. 

