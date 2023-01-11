import { applyMiddleware, combineReducers, createStore } from "redux";
import customerReducer from "../reducers/Customers.reducers";
import favoritesReducer from "../reducers/Favorites.reducers";
import thunk from 'redux-thunk';

const allReducers =  combineReducers({
    customerReducer,
    favoritesReducer
  });

const store = createStore(allReducers, applyMiddleware(thunk));

export default store;