import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

import AdminComments from '../AdminComments/AdminComments';
import './AdminFeedback.css';

const AdminFeedback = () => {

    // setup dispatch
    const dispatch = useDispatch();

    // gain access to global variables
    const store = useReduxStore();
    console.log(store.feedback);

    useEffect(() => {
        dispatch({ type: 'FETCH_FEEDBACK' });
    }, []);

    // append user feedback to the DOM
    return(
        <div>
            <div className="afeed">
                <h2>Player feedback (AVG)</h2>
                <p>Rating 1 to 5: 1 = Bad, 5 = Good</p>
            </div>
            <table className="afArea">
                <thead>
                    <tr className="afHeaders">
                        <th>
                            Navigation
                        </th>
                        <th>
                            Understanding
                        </th>
                        <th>
                            fun-ness
                        </th>
                    </tr>
                </thead>
                <tbody>
                     {/* loop through admin reducer */}
                    {store.feedback.map((back, id) => (
                        <tr className="afData" key={id}>
                            <td className="afrow">
                                {back.avg_nav}
                            </td>

                            <td className="afrow">
                                {back.avg_und}
                            </td>

                            <td className="afrow">
                                {back.avg_fun}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Player comments component */}
            <AdminComments />
        </div>
    );
}

export default AdminFeedback;