import { DELETE, START } from "../actions/customers.actions";

const customerReducer = (state = [], action) => {
    switch (action.type) {
        case START:
            return [...action.payload];
        // case DELETE:
        //     return state.filter((q) => q.id !== action.payload.id)
        default:
            return state;
    }
}

export default customerReducer