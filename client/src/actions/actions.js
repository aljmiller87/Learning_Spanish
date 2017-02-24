import thunk from 'redux-thunk';
import store from '../store';
import { ROOT, PORT } from '../../../server/config';
import axios from 'axios';

// export const GOTNEXTQUESTION = "GETTING_NEXT_QUESTION"
// export function gotNextQuestion (question) {
// 	return {
// 		type:GOTNEXTQUESTION,
// 		question:question.question,
// 		options:question.options,
// 		Answer:question.correctAnswer,

// 	}
// }

// //dispatch synchronous action when completed
// export function getNextQuestion(index) {
// 	return function(dispatch) {
// 	const url = '/questions'+ index;

// 	return fetch(url).then(response => {
			
// 			return response.json();
// 		}).then(question => {
// 			return dispatch(gotNextQuestion(question));
			 
// 		})
// 	}
// }

export const asyncFirstQuestion = () => {
	return dispatch => {
		return fetch('http://localhost:8080/firstquestion')
		.then(res => {
			console.log("First Question?", res.json());
			return res.json();
		}).then(_res => {
			return dispatch(firstQuestion(_res));
		}).catch(error => {
			return error;
		})
	}
}

export const FIRST_QUESTION = 'FIRST_QUESTION';
export const firstQuestion = (question) => ({
	type: FIRST_QUESTION,
	question: question
})

export const asyncStartQuiz = () => dispatch => {
	return fetch('/loadquestions')
	.then(res => {
		if (!res.ok) {
			throw new Error(res.statusText);
    	}
    	console.log("res?", res);
    	return res.json(); 
  	})
  	.then(_res => {
  		console.log("First question?", _res);
  		// dispatch(startQuiz(_res))
  	})
  	.catch(error => {
  		return error;
  	})
}

export const startQuiz = (firstQuestionInfo) => ({

})