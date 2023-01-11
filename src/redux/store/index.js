import { applyMiddleware, createStore } from "redux";
import customerReducer from "../reducers/Customers.reducers";
import thunk from 'redux-thunk';

const store = createStore(customerReducer, applyMiddleware(thunk));

export default store;