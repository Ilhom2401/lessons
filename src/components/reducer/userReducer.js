export default function userReducer(state = {
    age: 22,
    name: 'ali',
    users: [
        {
            firstName: 'Ilhom',
            lastName: 'Abdunasimov',
            age: 21,
            salary: 3000
        },
        {
            firstName: 'Azim',
            lastName: 'Choriyev',
            age: 34,
            salary: 1000
        },
        {
            firstName: 'Qodir',
            lastName: 'Ketmonov',
            age: 51,
            salary: 5000
        }
    ],
    count: 0
}, action) {
    switch (action.type) {
        case 'SET_AGE' :
            state = {
                ...state,
                age: action.payload
            };
            break;
        case 'SET_NAME' :
            state = {
                ...state,
                name: action.payload
            };
            break;
        case 'SET_SALARY' :
            state = {
                ...state,
                users: [
                    ...state.users,
                ]
            };
            break;
        case 'SET_COUNT' :
            state = {
                ...state,
                count: action.payload
            };
            break;
    }
    return state
}