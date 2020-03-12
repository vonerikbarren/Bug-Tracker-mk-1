import React from 'react';
import './App.css';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import DashboardHome from "./components/layout/DashboardHome";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import AppIndex from "./components/layout/LandingPage/AppIndex";
import EmployeeLogin from "./components/layout/EmployeeSide/EmployeeLogin";
import EmployeeRegister from "./components/layout/EmployeeSide/EmployeeRegister";
import EmployeeDashIndex from "./components/layout/EmployeeSide/EmployeeDashIndex";
import DevLogin from "./components/layout/DevSide/DevLogin";
import DevRegister from "./components/layout/DevSide/DevRegister";
import DevDashIndex from "./components/layout/DevSide/DevDashIndex";




// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">

          <Navbar />

          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/dashboard" component={DashboardHome} /> */}



          <Route exact path="/index" component={AppIndex} />
          <Route exact path="/EmployeeLogin" component={EmployeeLogin} />
          <Route exact path="/EmployeeRegister" component={EmployeeRegister} />
          <Route exact path="/DevLogin" component={DevLogin} />
          <Route exact path="/DevRegister" component={DevRegister} />



          <Route exact path="/EmployeeDashIndex" component={EmployeeDashIndex} />
          <Route exact path="/DevDashIndex" component={DevDashIndex} />



          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            {/* <PrivateRoute exact path="/EmployeeDashIndex" component={EmployeeDashIndex} /> */}
          </Switch>


        </div>
      </Router>
    </Provider>

  );
}

export default App;
