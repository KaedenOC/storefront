import { createAction } from "@reduxjs/toolkit";
import { SET, ADD_TO_CART, REMOVE } from "./constants";


export const changeCategory = createAction(SET);
export const addToCart = createAction(ADD_TO_CART);
export const removeFromCart = createAction(REMOVE);

// export const changeCategory = (category) => {
//   return {
//     type: 'SET',
//     payload: category,
//   }
// }

// export const add = (product) => {
//   return {
//     type: 'ADD_TO_CART',
//     payload: product
//   }
// }

// export const remove = (product) => {
//   return {
//     type: 'REMOVE',
//     payload: product
//   }
// }
