import {
    ADD_ITEM,
} from './actionTypes';

const initialState = {
    list: [
        {
            id: 1,
            name: 'item 1',
            price: 500,
            weight: 1000,
            quantity: 1,
        },
        {
            id: 2,
            name: 'item 2',
            price: 550,
            weight: 1000,
            quantity: 1,
        },
        {
            id: 3,
            name: 'item 3',
            price: 480,
            weight: 1000,
            quantity: 1,
        },
        {
            id: 4,
            name: 'item 4',
            price: 690,
            weight: 1000,
            quantity: 1,
        },
        {
            id: 5,
            name: 'item 5',
            price: 895,
            weight: 500,
            quantity: 1,
        },
        {
            id: 6,
            name: 'item 6',
            price: 210,
            weight: 500,
            quantity: 1,
        },
        {
            id: 7,
            name: 'item 7',
            price: 670,
            weight: 500,
            quantity: 1,
        },
        {
            id: 8,
            name: 'item 8',
            price: 120,
            weight: 100,
            quantity: 1,
        },
        {
            id: 9,
            name: 'item 9',
            price: 1120,
            weight: 100,
            quantity: 1,
        },
        {
            id: 10,
            name: 'item 10',
            price: 9920,
            weight: 50,
            quantity: 1,
        },
    ],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                list: [...state.list, action.payload]
            };

        default:
            return state;
    }
};
