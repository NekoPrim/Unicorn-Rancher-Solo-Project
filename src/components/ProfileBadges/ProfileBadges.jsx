import useReduxStore from '../../hooks/useReduxStore';

const ProfileBadges = () => {

    // gain access to global variables
    const store = useReduxStore();
    const userBadges = store.userBadge;
    console.log('user badges', userBadges);

    return(
        <div>

        </div>
    );
}

export default ProfileBadges;