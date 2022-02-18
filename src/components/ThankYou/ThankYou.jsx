import { Link } from 'react-router-dom';

import './ThankYou.css';

const ThankYou = () => {
    return(
        <div className="tyArea">
            <h1 className="tyTitle">
                Thank You for your feedback!
            </h1>
            <h3 className="tyCont">
                You have appeased the unicorns.
            </h3>
            <Link to="/home">
                <button className="btn tyBtn">
                    Home
                </button>
            </Link>
        </div>
    );
}

export default ThankYou;