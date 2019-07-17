export const initialData = {
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
