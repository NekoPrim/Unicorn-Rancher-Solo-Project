import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

const AdminComments = () => {

    // setup dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_COMMENTS_FEEDBACK' });
    }, []);

    // gain access to global variables
    const store = useReduxStore();
    console.log(store.comments);

    return(
        <div>
            <div className="afeed">
                <h3>Player comments on the game.</h3>
            </div>
            <table className="afArea">
                <thead>
                    <tr className="afHeaders">
                        <th>
                            Player Name
                        </th>

                        <th>
                            Player Comments
                        </th>

                        <th>
                            Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                     {/* loop through comments reducer */}
                    {store.comments.map((feed, id) => {
                        if (feed.comments.length >= 1) {
                            return(
                                <tr className="afData" key={id}>
                                    <td className="afrow">
                                        {feed.username}
                                    </td>

                                    <td className="afrow">
                                        {feed.comments}
                                    </td>

                                    <td className="afrow">
                                        {feed.date}
                                    </td>
                                </tr>
                            ) 
                        }
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AdminComments;