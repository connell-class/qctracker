import React from 'react';
import './App.css';
import { ProfilePage } from './components/profile/ProfilePage';

function App() {
  return (
    <div className="App">
        <ProfilePage firstName="First" lastName="Last" email="email1"/>
    </div>
  );
}

export default App;
