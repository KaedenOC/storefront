import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoryReducer from './categories';
import productReducer from './products';

let reducers = combineReducers({
  categories: categoryReducer,
  products: productReducer
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();