import { Link } from 'react-router-dom';

import './Badge.css';

const Badge = () => {
    return(
        <div>
            <h1 className="bTitle">Congratulations!!!</h1>
            <Link to='/home'>
                <button className="btn bBtn">
                    Home
                </button>
            </Link>
        </div>
    );
}

export default Badge;