import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {

    categories: [
      { name: 'electronics', displayName: 'Electronics' },
      { name: 'food', displayName: 'Food' },
      { name: 'clothing', displayName: 'Clothing' },
    ],
    activeCategory: ''
  },
  reducers: {
    SET: (state, action) => {
      return {...state, activeCategory: action.payload}
    }
  }
})


// const categoryReducer = createReducer(
//   //first param is our initialState
//   initialState,
//   //second param is individual reducer properties
//   {
//     [SET]: (state, action) => {
//       return {
//         ...state,
//         activeCategory: action.payload,
//       }
//     }
//   }
// );

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



export const { SET } = categorySlice.actions;
export default categorySlice.reducer;