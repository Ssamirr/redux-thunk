import { ADD, DELETE_ALL, DELETE_FROM_FAVORITES } from "./favorites.actions";

export const add = (payload) => {
    return {
        type: ADD,
        payload,
    };
};

export const deleteAll = (payload) => {
    return {
        type: DELETE_ALL,
        payload,
    };
};


export const deleteItem = (payload) => {
    return {
        type: DELETE_FROM_FAVORITES,
        payload,
    };
};