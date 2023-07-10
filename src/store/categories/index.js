import { createReducer } from '@reduxjs/toolkit';
import { SET } from "../constants";




let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  activeCategory: ''
};

const categoryReducer = createReducer(
  //first param is our initialState
  initialState,
  //second param is individual reducer properties
  {
    [SET]: (state, action) => {
      return {
        ...state,
        activeCategory: action.payload,
      }
    }
  }
);

// function categoryReducer(state=initialState, action){
//   switch(action.type){
//     case 'SET':
//       return {
//         ...state,
//         activeCategory: action.payload,
//       }
//     default:
//       return state;
//   }
// }



export default categoryReducer;