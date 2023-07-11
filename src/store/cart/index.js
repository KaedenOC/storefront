import { createSlice } from "@reduxjs/toolkit";

//slice includes the corresponding reducer, actions, and selectors
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => [...state, {
      name: action.payload.name,
      price: action.payload.price,
    }],
    removeFromCart: (state, action) => state.filter(product => product.name !== action.payload.name)
  }
});



// function cartReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return {
//         ...state,
//         cart: [...state.cart, {
//           name: action.payload.name,
//           price: action.payload.price,
//         }
//         ]
//       }
//     case 'REMOVE':
//       return {
//         ...state,
//         cart: state.cart.filter(product => product.name !== action.payload.name)
//       };
//     default:
//       return state;
//   }
// }

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;