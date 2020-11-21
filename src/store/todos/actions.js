export const addItem = payload => ({
  type: 'todos/addItem',
  payload
})

export const editItem = payload => ({
  type: 'todos/editItem',
  payload
})

export const removeItem = payload => ({
  type: 'todos/removeItem',
  payload
})