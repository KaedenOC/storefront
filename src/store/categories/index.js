let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics', description: 'definitely electronics' },
    { name: 'food', displayName: 'Food', description: 'definitely food' },
    { name: 'clothing', displayName: 'Clothing', description: 'definitely clothes' },
  ],
  activeCategory: '',
};

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_CATEGORY':
      return {
        ...state,
        categories: state.categories.map(category => {
          if (category.name === action.payload.name) { //payload is a property of action
            return {
              name: category.name,
              displayName: category.displayName,
              activeCategory: category.name,
            }
          }
          return category;
        })
      }
  }
}

export const changeCategory = (category) => {
  return{
    type: 'CHANGE_CATEGORY',
    payload: category,
  }
}

export default categoriesReducer;