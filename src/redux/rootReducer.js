import {
    ADD_ITEM,
} from './actionTypes';

const initialState = {
    list: [],
    allWeight: 0,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                list: [...state.list, action.payload],
                allWeight: state.allWeight + action.payload.weight,
            };

        default:
            return state;
    }
};
