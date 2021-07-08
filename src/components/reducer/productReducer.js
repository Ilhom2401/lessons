export default function productReducer(state = {
    title: 'fruits',
    price: 30000,
    products: [
        {
            title: 'Apricot',
            price: 15000,
            weight: '1.5kg'
        },
        {
            title: 'Cherry',
            price: 25000,
            weight: '2kg'
        },
        {
            title: 'Banana',
            price: 35000,
            weight: '1.5kg'
        }
    ]
}, action) {
    switch (action.type) {
        case 'SET_PRICE' :
            state = {
                ...state,
                price: action.payload
            };
            break;
    }
    return state
}