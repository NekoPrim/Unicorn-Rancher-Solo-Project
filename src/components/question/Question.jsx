import { HashRouter as Router, Route, Link} from 'react-router-dom';

const Question = () => {
    return(
        <Router>
            <Route exact path="/questionOne">
                <QuestionOne />
            </Route>

            <Route exact path="/questionTwo">
                <QuestionTwo />
            </Route>

            <Route exact path="/questionThree">
                <QuestionThree />
            </Route>
        </Router>
    );
}

export default Question;