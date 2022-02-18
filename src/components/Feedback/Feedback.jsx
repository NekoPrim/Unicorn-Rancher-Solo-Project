import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './Feedback.css';

const Feedback = () => {

    // setup local variables
    const [navigation, setNavigation] = useState('');
    const [understanding, setUnderstanding] = useState('');
    const [fun, setFun] = useState('');
    const [comments, setComments] = useState('');

    // setup dispatch and history
    const dispatch = useDispatch();
    const history = useHistory();

    // on submit this function is called
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('in handleSubmit');

        // setup payload to be sent to saga
        const feedback = {
            navigation: navigation,
            understanding: understanding,
            fun: fun,
            comments: comments
        };

        console.log('check feedback', feedback);

        // send datd to feedback saga
        dispatch({
            type: 'CREATE_FEEDBACK',
            payload: feedback
        });

        // navigate to thankyou component
        history.push('/ty');
    }

    // render feedback questions to the DOM
    return(
        <div className="fArea">
            <form onSubmit={handleSubmit}>
                <div className="fdiv">
                    {/* question one */}
                    <h3 className="fTitle">
                        How easy was it to navigate Unicorn Rancher?
                    </h3>
                    <h5 className="fnum">
                        1 being not easy, 5 being super easy
                    </h5>
                    {/* enter 1-5 */}
                    <input
                        onKeyPress={(event) => {
                            if (!/[0-5]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                        type="text"
                        maxLength="1"
                        onChange={(event) => setNavigation(event.target.value)}
                        value={navigation}
                        placeholder='1-5'
                    />
                </div>
                <div className="fdiv">
                    {/* question two */}
                    <h3 className="fTitle">
                        How easy is it to understand the game?
                    </h3>
                    <h5 className="fnum">
                        1 being not easy, 5 being super easy
                    </h5>
                    {/* enter 1-5 */}
                    <input
                        onKeyPress={(event) => {
                            if (!/[0-5]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                        type="text"
                        maxLength="1"
                        onChange={(event) => setUnderstanding(event.target.value)}
                        value={understanding}
                        placeholder='1-5'
                    />
                </div>

                <div className="fdiv">
                    {/* question three */}
                    <h4 className="fTitle">
                        How fun is Unicorn Rancher?
                    </h4>
                    <h5 className="fnum">
                        1 being not fun, 5 being super fun
                    </h5>
                    {/* enter 1-5 */}
                    <input
                        onKeyPress={(event) => {
                            if (!/[0-5]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                        type="text"
                        maxLength="1"
                        onChange={(event) => setFun(event.target.value)}
                        value={fun}
                        placeholder='1-5'
                    />
                </div>

                <div>
                    {/* does not need to be filled out */}
                    <h3 className="fTitle">
                        Any comments?
                    </h3>
                    <textarea
                        type="text"
                        name="comments"
                        onChange={(event) =>setComments(event.target.value)}
                        value={comments}
                    />
                </div>
                {/* navigate to thank you page */}
                <button 
                    type="submit" 
                    className="btn fBtn"
                    disabled={ !navigation || !understanding || !fun }
                >
                    Submit Feedback
                </button>
            </form>
        </div>
    );
}

export default Feedback;