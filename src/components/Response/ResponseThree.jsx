import useReduxStore from '../../hooks/useReduxStore';
import { Link } from 'react-router-dom';

import Level from '../Level/Level';

const ResponseThree = () => {

    // gain access to global variables
    const store = useReduxStore();
    console.log('selected answer', store.selected);

    return(
        <div>
            {/* level data */}
            <Level />

            <h2>{store.selected.response}</h2>
            {/* navigate to badge component */}
            <Link to="/badge">
                <button className="btn">
                    Finished!
                </button>
            </Link>
        </div>
    );
}

export default ResponseThree;