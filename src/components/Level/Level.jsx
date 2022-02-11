import useReduxStore from '../../hooks/useReduxStore';

const Level = () => {

    const store = useReduxStore();
    console.log('level data', store.level);
    return(
        <div>
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