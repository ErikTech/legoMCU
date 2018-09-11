const initialState = [
	{
		id: 0,
		name: "thor"
	}
]
const herolist = (state = initialState, action) => {
	switch (action.type) {
		case 'CHOOSE_MINIFIG':
			console.log("You are choosing Minifig!" + action.name)
			return Object.assign({}, ...state, {
				id: action.id,
				name: action.name
			})
			case 'CHOOSE_MOVIE':
				console.log("You are choosing MOVIE!!"+ action.type + action.payload)
				return action.payload
			default:
				return state
	}
}
export default herolist
