import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categories';
import productReducer from './products';
import cartReducer from './cart';

const store = () => configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
    cart: cartReducer

  }
})



export default store();