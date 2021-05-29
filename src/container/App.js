
import LanguageSelector from "../components/LanguageSelector";
import React from "react";
import HomePage from "../pages/HomePage";
import {HashRouter as Router, Route, Redirect,Switch} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import UserSignupPage from "../pages/UserSignupPage";
import UserPage from "../pages/UserPage";
import TobBar from "../components/TobBar";


function App() {
  return (
    <div className="container-urban container">
        <Router>
            <TobBar/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/signup" component={UserSignupPage}/>
                <Route path="/user/:username" component={UserPage}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
        <LanguageSelector/>
    </div>
  );
}

export default App;
