import React from 'react';
import * as Cookies from 'js-cookie';
import {SERVER_ROOT} from '../config';
import * as actions from '../actions/actions';
import {connect} from 'react-redux';

export class QuestionPage extends React.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.startQuiz = this.startQuiz.bind(this);
        this.firstQuestion = this.firstQuestion.bind(this);
        this.selectAnswer = this.selectAnswer.bind(this);
    }


    componentDidMount() {
        const accessToken = Cookies.get('accessToken');
        fetch(`${SERVER_ROOT}/api/questions`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }).then(res => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(questions =>
            this.setState({
                questions
            })
        );
    }

    startQuiz() {
        this.props.dispatch(actions.asyncStartQuiz());
    }

    firstQuestion() {
        this.props.dispatch(actions.asyncFirstQuestion());
    }

    selectAnswer(id, props) {
        
        console.log("SELECT ANSWER CALLED")
        console.log(id);
        const clickedItem = document.getElementById(id);
        const selectedAnswer = clickedItem.getAttribute("value");
        console.log(selectedAnswer);

        this.props.dispatch(actions.getNextQuestion(1))

        }

        

    
    render() {
      
        

        return (
            <div>
                <div onClick={this.startQuiz}>Click to start your quiz</div>
                <div onClick={this.firstQuestion}>Click to get first question</div>
                <ul className="question-list">
                <div> <li >{this.props.question}</li>
                
                
                <div value="1" id="1" onClick={() => this.selectAnswer("1")}>Work?</div>
                    <br/>
                <div value="two" id="2" onClick={() => this.selectAnswer("2")}> right</div>
                    <br/>
                <div value="three" id="3" onClick={() => this.selectAnswer("3")}>here</div>
                </div>
                </ul>
                </div>
        );
    }
}


function mapStateToProps (state, props) {
    return {

        question:state.question,
        options:state.options,
        correctAnswer: state.correctAnswer
    }

}
export default connect(mapStateToProps)(QuestionPage);