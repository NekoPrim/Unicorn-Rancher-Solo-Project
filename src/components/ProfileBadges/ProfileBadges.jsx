import useReduxStore from '../../hooks/useReduxStore';

import './ProfileBadges.css';

const ProfileBadges = () => {

    // gain access to global variables
    const store = useReduxStore();
    const userBadges = store.userBadge;
    console.log('user badges', userBadges);

    function getUnique(arr, index) {

        const unique = arr
            .map(e => e[index])

             // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)

             // eliminate the dead keys & store unique objects
            .filter(e => arr[e]).map(e => arr[e]);      

        return unique;
    } // https://stackoverflow.com/questions/37217953/removing-duplicate-array-values-and-then-storing-them-react

    console.log('filtered badges',getUnique(userBadges,'name'));
    const uniqueBadges = getUnique(userBadges,'name');

    return(
        <div>
            <h3 className="badgeNum">{uniqueBadges.length} out of 4</h3>
            {uniqueBadges.map((pic, id) => (
                <div className="badgeArea" key={id}>
                    <h4>{pic.name}</h4>
                    <img className="pbImg" src={pic.image} />
                </div>
            ))}
        </div>
    );
}

export default ProfileBadges;