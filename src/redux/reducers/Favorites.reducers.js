import { toast } from "react-toastify";
import { ADD, DELETE_ALL } from "../actions/favorites.actions";


const favoritesReducer = (state = [], action) => {
    if (state === undefined) {
        return [];
    }

    switch (action.type) {
        case ADD:
            if (state.filter(q => q.id === action.payload.id).length === 0) {
                toast.success("Item added to favorites list", { autoClose: 2000 });
                return [...state, action.payload]
            } else {
                toast.error("item is deleted from favorites list", { autoClose: 2000 });
                return [...state.filter(q => q.id !== action.payload.id)];
                
            }
        case DELETE_ALL:
            return [];
        default:
            return state;
    }
};

export default favoritesReducer