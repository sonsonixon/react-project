import { INCREMENT, DECREMENT } from '../ActionCreator';

export const increment = () => {
  	return dispatch => {
	    dispatch({
	      	type: INCREMENT
	    })
  	}
}

export const decrement = () => {
  	return dispatch => {
    	dispatch({
      		type: DECREMENT
    	})
  	}
}

