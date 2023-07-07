import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoriesReducer from './categories';

let reducers = combineReducers({
  categories: categoriesReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store;