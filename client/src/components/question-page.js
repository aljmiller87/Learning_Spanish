import React from 'react';
import * as Cookies from 'js-cookie';
import {SERVER_ROOT} from '../config';
import * as actions from '../actions/actions';
import {connect} from 'react-redux';

export class QuestionPage extends React.Component {
    constructor(props) {
        super(props);
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

    selectAnswer(id, props) {
        
        console.log("SELECT ANSWER CALLED")
        console.log(id);
        const clickedItem = document.getElementById(id);
        const selectedAnswer = clickedItem.getAttribute("value");
        console.log(selectedAnswer);

        this.props.dispatch(actions.getNextQuestion(1))

        }

        

    
    render() {
            <div> <li >{this.props.question}</li>
            
            
            <div value="1" id="1" onClick={() => this.selectAnswer("1")}>Work?</div>
                <br/>
            <div value="two" id="2" onClick={() => this.selectAnswer("2")}> right</div>
                <br/>
            <div value="three" id="3" onClick={() => this.selectAnswer("3")}>here</div>
            </div>
        

        return (
            <ul className="question-list">
            <div> <li >{this.props.question}</li>
            
            
            <div value="1" id="1" onClick={() => this.selectAnswer("1")}>Work?</div>
                <br/>
            <div value="two" id="2" onClick={() => this.selectAnswer("2")}> right</div>
                <br/>
            <div value="three" id="3" onClick={() => this.selectAnswer("3")}>here</div>
            </div>
            </ul>
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