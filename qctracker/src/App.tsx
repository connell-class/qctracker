import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Landing } from './components/landing/Landing';
import { ProfilePage } from './components/profile/ProfilePage';
import { LoginPage } from './pages/loginPage';
import { RegisterPage } from './pages/registerPage';

function App() {
  return (
    <body>
    <Router>
      <Switch>
        <Route exact path="/" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/landing" component={Landing}/>
        <Route path="/profilepage">
          <ProfilePage {...JSON.parse(sessionStorage.getItem("user") || `{
    "id": 6,
    "email": "james@jammes.net",
    "firstName": "James",
    "lastName": "James",
    "password": "wasspord"
  }`)} />
        </Route>
      </Switch>
    </Router>
    </body>
  );
};

export default App;