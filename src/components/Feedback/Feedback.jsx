import React from 'react';
import { useDispatch } from 'react-redux';

const Feedback = () => {

    // setup local variables
    // const [navigate, setNavigate] = useState('');

    // setup dispatch
    const dispatch = useDispatch();

    // on submit this function is called
    // const handleSubmit = () => {
    //     console.log('in handleSubmit');
    // }

    // return(
    //     <div>
    //         <form onSubmit={handleSubmit}>
    //             <div>
    //                 <h3>How easy was it to navigate Unicorn Rancer?</h3>
    //                 <h5>1 being not easy, 5 being super easy</h5>
    //                 <input
    //                     onKeyPress={(event) => {
    //                         if (!/[0-5]/.test(event.key)) {
    //                             event.preventDefault();
    //                         }
    //                     }}
    //                     type="text"
    //                     maxLength="1"
    //                     value={navigate}
    //                     onChange={(event) =>setFeeling(event.target.value)}
    //                     placeholder='1-5'
    //                 />
    //             </div>
    //             <div>
    //                 <h3>How easy is it to understand the game?</h3>
    //                 <h5>1 being not easy, 5 being super easy</h5>
    //                 <input
    //                     onKeyPress={(event) => {
    //                         if (!/[0-5]/.test(event.key)) {
    //                             event.preventDefault();
    //                         }
    //                     }}
    //                     type="text"
    //                     maxLength="1"
    //                     value={understand}
    //                     onChange={(event) =>setFeeling(event.target.value)}
    //                     placeholder='1-5'
    //                 />
    //             </div>

    //             <div>
    //                 <h4>How fun is Unicorn Rancher?</h4>
    //                 <h5>1 being not fun, 5 being super fun</h5>
    //                 <input
    //                     onKeyPress={(event) => {
    //                         if (!/[0-5]/.test(event.key)) {
    //                             event.preventDefault();
    //                         }
    //                     }}
    //                     type="text"
    //                     maxLength="1"
    //                     value={fun}
    //                     onChange={(event) =>setFeeling(event.target.value)}
    //                     placeholder='1-5'
    //                 />
    //             </div>

    //             <div>
    //                 <h3>Any comments?</h3>
    //                 <textarea
    //                     type="text"
    //                 />
    //             </div>
    //             <button className="btn">
    //                 Submit Feedback
    //             </button>
    //         </form>
    //     </div>
    // );
}

export default Feedback;