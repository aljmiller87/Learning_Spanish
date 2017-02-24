import thunk from 'react-thunk';
import store from '../store';

export const GOTNEXTQUESTION = "GETTING_NEXT_QUESTION"
export function gotNextQuestion (question) {
	return {
		type:GOTNEXTQUESTION,
		question:question.question,
		options:question.options,
		Answer:question.correctAnswer,

	}
}

//dispatch synchronous action when completed
export function getNextQuestion(index) {
	return function(dispatch) {
	const url = '/questions'+ index;

	return fetch(url).then(response => {
			
			return response.json();
		}).then(question => {
			return dispatch(gotNextQuestion(question));
			 
		})
	}
}