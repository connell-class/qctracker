import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom';
import  {ViewAvgGradesComponent} from '../src/pages/ViewAvgGradeComponent';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Router>

        <Switch>
        <Route path='pages/ViewAvgGradeComponent' component={ViewAvgGradesComponent} /> 
        </Switch>

      </Router>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React=
        </a>
  
      
      

      </header>
    </div>
  );
}

export default App;
