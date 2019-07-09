export const initialData = {
    "cards": [
        {
            "id": 'task-1', "content": 'Take out the garbage'
        },
        {
            "id": 'task-2', "content": 'Take dog out for a walk'
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
