import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

import QuestionOne from '../Question/QuestionOne';
import ResponseOne from '../Response/ResponseOne';
import QuestionTwo from '../Question/QuestionTwo';
import ResponseTwo from '../Response/ResponseTwo';
import QuestionThree from '../Question/QuestionThree';
import ResponseThree from '../Response/ResponseThree';
import Badge from '../Badge/Badge';
import Profile from '../Profile/Profile';
import Edit from '../Edit/Edit';
import Admin from '../Admin/Admin';
import Feedback from '../Feedback/Feedback';
import ThankYou from '../ThankYou/ThankYou';
import AdminFeedback from '../AdminFeedback/AdminFeedback';
import Technologies from '../Technologies/Technologies';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    // request user data
    dispatch({ type: 'FETCH_USER' });
    // request user badges
    dispatch({ type: 'FETCH_USER_BADGE' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />
          

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows question one else shows LoginPage
            exact
            path="/questionOne"
          >
            <QuestionOne />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows response one else shows LoginPage
            exact
            path="/responseOne"
          >
            <ResponseOne />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows question two else shows LoginPage
            exact
            path="/questionTwo"
          >
            <QuestionTwo />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows response two else shows LoginPage
            exact
            path="/responseTwo"
          >
            <ResponseTwo />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows question three else shows LoginPage
            exact
            path="/questionThree"
          >
            <QuestionThree />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows response three else shows LoginPage
            exact
            path="/responseThree"
          >
            <ResponseThree />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows badge else shows LoginPage
            exact
            path="/badge"
          >
            <Badge />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows profile else shows LoginPage
            exact
            path="/Profile"
          >
            <Profile />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows edit else shows LoginPage
            exact
            path="/edit"
          >
            <Edit />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows admin else shows LoginPage
            exact
            path="/admin"
          >
            <Admin />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows feedback else shows LoginPage
            exact
            path="/feedback"
          >
            <Feedback />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows feedback else shows LoginPage
            exact
            path="/ty"
          >
            <ThankYou />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows feedback else shows LoginPage
            exact
            path="/adminFeedback"
          >
            <AdminFeedback />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows feedback else shows LoginPage
            exact
            path="/technologies"
          >
            <Technologies />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <Route
            exact
            path="/game"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/questionOne" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <Route
            exact
            path="/game"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/responseOne" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <Route
            exact
            path="/game"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/questionTwo" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <Route
            exact
            path="/game"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/responseTwo" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <Route
            exact
            path="/game"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/QuestionThree" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <Route
            exact
            path="/game"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/ResponseThree" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <Route
            exact
            path="/game"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/Badge" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <Route
            exact
            path="/Profile"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/Profile" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <Route
            exact
            path="/feedback"
          >
            {(user.authLevel === 'USER') ?
              // If the user is admin, 
              // redirect them to the /admin page
              <Redirect to="/feedback" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <Route
            exact
            path="/ty"
          >
            {user.id ?
              // If the user is admin, 
              // redirect them to the /admin page
              <Redirect to="/ty" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <Route
            exact
            path="/userfeedback"
          >
            {(user.authLevel === 'ADMIN') ?
              // If the user is admin, 
              // redirect them to the /admin page
              <Redirect to="/adminFeedback" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <Route
            exact
            path="/admin"
          >
            {(user.authLevel === 'ADMIN') ?
              // If the user is admin, 
              // redirect them to the /admin page
              <Redirect to="/admin" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <Route
            exact
            path="/admin"
          >
            {(user.authLevel === 'ADMIN') ?
              // If the user is admin, 
              // redirect them to the /technologies page
              <Redirect to="/technologies" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
