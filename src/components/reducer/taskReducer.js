export default function taskReducer(state = {
    tasks: [
        {
            id: 1,
            title: 'Task one'
        },
        {
            id: 2,
            title: 'Task two'
        }
    ]
}, action) {
    switch (action.type) {
        case 'ADD_TASK' :
            let newTask = [...state.tasks];
            newTask.push(
                {
                    id: state.tasks.length + 1,
                    title: action.payload
                });
            state = {
                ...state,
                tasks: newTask
            };
            break;
        case 'DELETE_TASK' :
            let deletingTask = [...state.tasks];
            deletingTask.splice(action.payload, 1);
            state={
                ...state,
                tasks: deletingTask
            };
            break
    }
    return state
}