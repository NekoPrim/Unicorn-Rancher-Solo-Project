import useReduxStore from '../../hooks/useReduxStore';
import { Link } from 'react-router-dom';

import Level from '../Level/Level';
import './Response.css';

const ResponseOne = () => {

    // gain access to global variables
    const store = useReduxStore();
    console.log('selected answer', store.selected);

    return(
        <div>
            {/* level data */}
            <Level />
            <div>
            <img className="rImg" src={store.selected.question_image} />
            <h2 className="rContent">{store.selected.response}</h2>
            </div>
            {/* navigate to next question */}
            <Link to="/questionTwo">
                <button className="btn rBtn">
                    Next Question
                </button>
            </Link>
        </div>
    );
}

export default ResponseOne;