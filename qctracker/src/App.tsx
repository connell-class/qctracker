import React from 'react';

import './App.css';
import { Landing } from './component/landing/Landing'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { LoginPage } from './pages/loginPage'
import { RegisterPage } from './pages/registerPage'




function App() {
  return (
    <body>
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route exact path="/" component={RegisterPage} />
        <Route path="/landing" component={Landing}/>
      </Switch>
    </Router>
    </body>
  );
}

export default App;



