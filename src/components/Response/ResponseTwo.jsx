import useReduxStore from '../../hooks/useReduxStore';
import { Link } from 'react-router-dom';

import Level from '../Level/Level';
import './Response.css';

const ResponseTwo = () => {

    // gain access to global variables
    const store = useReduxStore();
    console.log('selected answer', store.selected);

    return(
        <div>
            {/* level data */}
            <Level />

            <h2 className="rContent">{store.selected.response}</h2>
            <img className="rImg" src={store.selected.question_image} />
            {/* navigate to next question */}
            <Link to="/questionThree">
                <button className="btn rBtn">
                    Next Question
                </button>
            </Link>
        </div>
    );
}

export default ResponseTwo;