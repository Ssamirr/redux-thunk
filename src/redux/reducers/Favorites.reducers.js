import { ADD, DELETE_ALL } from "../actions/favorites.actions";


const favoritesReducer = (state = [], action) => {
    if (state === undefined) {
        return [];
    }

    switch (action.type) {
        case ADD:
            if (!state.includes(action.payload)) {
                return [...state, action.payload]
            } else {
                return [...state.filter(q => q.id !== action.payload.id)];
            }
        case DELETE_ALL:
            return [];
        default:
            return state;
    }
};

export default favoritesReducer