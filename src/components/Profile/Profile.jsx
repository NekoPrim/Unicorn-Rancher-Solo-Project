import useReduxStore from '../../hooks/useReduxStore';

import ProfileBadges from '../ProfileBadges/ProfileBadges';
import './Profile.css'

const Profile = () => {

    // gain access to global variables
    const store = useReduxStore();
    console.log('user data', store.user);

    // append user data to DOM
    return(
        <div>
            <div className="pHeader">
            <img className="pImg" src={store.user.profile_image} />
            <h2>User Name: {store.user.username}</h2>
            </div>
            <div>
                <h2 className="pBody">Your Badges!</h2>
                <ProfileBadges />
            </div>
        </div>
    );
}

export default Profile;