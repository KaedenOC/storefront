import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import storeReducer from './categories';

let reducers = combineReducers({
  store: storeReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();