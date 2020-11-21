const initialState = {
  items:[]
}

const todos = (state = initialState, action) => {
  switch(action.type){
    case 'todos/addItem':
        return {
          ...state,
          items: [...state.items, action.payload]
        }
    case 'todos/editItem':
      return {
        ...state,
        items: [...state.items.map(item => item.id === action.payload.id ? action.payload : item)]
      }
    case 'todos/removeItem':
      return {
        ...state,
        items: [...state.items.filter(item => item.id !== action.payload.id)]
      }
    default:
      return state;
  }
}

export default todos;