import { GET_WEATHER } from '../actions/index';

export default function(state = [], action){
	switch(action.type){
		case GET_WEATHER:
		 return [ actions.payload.data , ...state];
	}
	return state;
}