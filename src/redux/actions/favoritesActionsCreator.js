import { ADD, DELETE_ALL } from "./favorites.actions";

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