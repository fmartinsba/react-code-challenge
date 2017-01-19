export default function reducer(state={
  buttons: [],
  bars: [],
  limit: 100,
  error: null
}, action) {

	switch(action.type) {

		case 'GET_ENDPOINT_FAIL': {
			return {
				...state,
				error: action.payload
			}
		}

		case 'GET_ENDPOINT_SUCCESS': {
			return {
				...state,
				buttons: action.buttons,
				bars: action.bars,
				limit: action.limit
			}
		}

		default: {
			return state;
		}

	}

}