import useReduxStore from '../../hooks/useReduxStore';
import {Link} from 'react-router-dom';

import ProfileBadges from '../ProfileBadges/ProfileBadges';
import './Profile.css'

const Profile = () => {

    // gain access to global variables
    const store = useReduxStore();
    console.log('user data', store.user);

    // append user data to DOM
    return(
        <div className="pArea">
            <div className="pHeader">
                <img className="pImg" src={store.user.profile_image} />
                <h2 className="pH">
                    <>User Name: </>
                    <strong style={{ 
                        "color": "mediumvioletred", 
                        "fontSize": "3rem" 
                        }}
                    >
                        {store.user.username}
                    </strong>
                </h2>
            </div>
            {/* navigate to edit page */}
            <Link to="/edit">
                <button className="btn pBtn">
                    Edit
                </button>
            </Link>
            <div>
                {/* user badges component */}
                <h2 className="pBody">
                    Your Badges!
                </h2>
                <ProfileBadges />
            </div>
        </div>
    );
}

export default Profile;