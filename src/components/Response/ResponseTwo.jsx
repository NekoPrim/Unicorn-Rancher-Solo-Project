import useReduxStore from '../../hooks/useReduxStore';
import { Link } from 'react-router-dom';

import Level from '../Level/Level';

const ResponseTwo = () => {

    // gain access to global variables
    const store = useReduxStore();
    console.log('selected answer', store.selected);

    return(
        <div>
            {/* level data */}
            <Level />

            <h2>{store.selected.response}</h2>
            {/* navigate to next question */}
            <Link to="/questionThree">
                <button className="btn">
                    Next Question
                </button>
            </Link>
        </div>
    );
}

export default ResponseTwo;