import useReduxStore from '../../hooks/useReduxStore';
import { Link } from 'react-router-dom';

import Level from '../Level/Level';
import './Response.css';

const ResponseTwo = () => {

    // gain access to global variables
    const store = useReduxStore();
    console.log('selected answer', store.selected);

    // append seleceted answer response to the DOM
    return(
        <div>
            {/* level data */}
            <Level />
            <div className="rCont">
            <div>
                <img className="rImg" src={store.selected.question_image} />
                <h2 className="rContent">
                    {store.selected.response}
                </h2>
            </div>
            {/* navigate to next question */}
                <Link to="/questionThree">
                    <button className="btn rBtn">
                        Next Question
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ResponseTwo;