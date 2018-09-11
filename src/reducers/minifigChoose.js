const initialState = {
  minifig: ''
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_MINIFIG':
      console.log("You are choosing Minifig!"+ action.type + action.payload)
      return action.payload
    default:
      return state
  }
}
