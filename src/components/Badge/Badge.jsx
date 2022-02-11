import { Link } from 'react-router-dom';

const Badge = () => {
    return(
        <div>
            <h1>Congratulations!!!</h1>
            <Link to='/home'>
                <button>
                    Finish
                </button>
            </Link>
        </div>
    );
}

export default Badge;