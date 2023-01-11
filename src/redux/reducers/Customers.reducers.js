import {  START } from "../actions/customers.actions";

const customerReducer = (state = [], action) => {
    switch (action.type) {
        case START:
            return [...action.payload];
        default:
            return state;
    }
}

export default customerReducer