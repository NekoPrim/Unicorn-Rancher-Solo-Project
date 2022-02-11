import useReduxStore from '../../hooks/useReduxStore';

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
            <h2>{store.user.username}</h2>
            </div>
        </div>
    );
}

export default Profile;