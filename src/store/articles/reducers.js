const initialState = []

const articles = (state = initialState, action) => {
  switch(action.type){
    case 'articles/addItem': 
      return [...state, {...action.payload}]
    case 'articles/removeItem': 
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state;
  }
}

export default articles