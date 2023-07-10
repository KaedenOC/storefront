
export const changeCategory = (category) => {
  return {
    type: 'SET',
    payload: category,
  }
}

export const add = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product
  }
}

export const remove = (product) => {
  return {
    type: 'REMOVE',
    payload: product
  }
}
