import update from 'immutability-helper';
import * as actions from '../actions/actions';
import store from '../store';

const initialState = {
	question: "",
	options:[]
};

export function mainReducer (state = initialState, action) {
	if (action.type === 'FIRST_QUESTION') {
		let currentQuestion = action.question.question;
		let currentOptions = action.question.options;
		setTimeout(()=> { console.log(store.getState(), "GETSTATE")}, 2000);
		return update(state, {
			question: {$set: currentQuestion},
			options: {$set: [currentOptions]}
		})
	}

		
	return state;
		
}