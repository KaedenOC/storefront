import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
  { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
  { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
  { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
  { name: 'Apples', category: 'food', price: .99, inStock: 500 },
  { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
  { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
];

const productSlice = createSlice({
  name: 'products',
  initialState,
    reducers: {
      SET: (state, action) => { initialState.filter(product => product.category === action.payload.name) },
      ADD_TO_CART: (state, action) => state.map(product => product.name === action.payload.name ? { ...product, inStock: product.inStock - 1 } : product),
      REMOVE: (state, action) => state.map(product => product.name === action.payload.name ? { ...product, inStock: product.inStock + 1 } : product)
    },
  });

// const productReducer = createReducer(
//   initialState,
//   {
//     [SET]: (state, action) => {
//       return {
//         products: initialState.products.filter(product => product.category === action.payload.name)
//       };
//     }
//   }
// )

// function productReducer(state=initialState, action){
//   switch(action.type){
//     case 'SET':
//       return {
//         products: initialState.products.filter(product => product.category === action.payload.name)
//       };
//     default:
//       return state;
//   }
// }

// export const { SET } = categorySlice.actions;
export default productSlice.reducer;