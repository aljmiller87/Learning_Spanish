import React from 'react';
import * as Cookies from 'js-cookie';

import QuestionPage from './question-page';
import LoginPage from './login-page';
import {SERVER_ROOT} from '../config';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        };

        this.checkAnswer = this.checkAnswer.bind(this);
        this.getnextQuestion = this.getnextQuestion.bind(this);
    }

    checkAnswer(event, props) {
        event.preventDefault();

        if( selectedAnswer === props.answer) {


        }
        //check value of input from the answer to the current questions answer stored in the state
        // if (INPUT === STATE.ANSWER OR PROPS.ANSWER) DISPATCH AN ACTION TO ADD TO THE CORRECT 
        //AND THEN SWITCH TO THE NEXT QUESTION BY TRIGGERING AN ACTION

    }

    getnextQuestion(event, props) {
        event.preventDefault();

        this.props.dispatch(actions.getnextQuestion(1));


    }


    componentDidMount() {
        // Job 4: Redux-ify all of the state and fetch calls to async actions.
        const accessToken = Cookies.get('accessToken');
        if (accessToken) {
            fetch(`${SERVER_ROOT}/api/me`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }).then(res => {
                if (!res.ok) {
                    if (res.status !== 401) {
                        // Unauthorized, clear the cookie and go to
                        // the login page
                        Cookies.remove('accessToken');
                        return;
                    }
                    throw new Error(res.statusText);
                }
                return res.json();
            }).then(currentUser =>
                this.setState({
                    currentUser
                })
            );
        }
    }

    render() {
        if (!this.state.currentUser) {
            return <LoginPage />;
        }

        return <QuestionPage onClick={this.getnextQuestion} />;
    }
}



function mapStateToProps (state, props) {
    return {

        question:state.question,
        options:state.options,
        correctAnswer: state.correctAnswer
    }

}
export default connect(mapStateToProps)(App);