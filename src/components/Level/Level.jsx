import useReduxStore from '../../hooks/useReduxStore';

import './Level.css';

const Level = () => {

    // gain access to global variables
    const store = useReduxStore();
    console.log('level data', store.level);

    // render level name and number to DOM
    return(
        <div className="levelTitle">
            {store.level.map((number, id) => (
                <div key={id}>
                    <h1>{number.name}</h1>
                    <h4>Level: {number.number}</h4>
                </div>
            ))}
        </div>
    )
}

export default Level;