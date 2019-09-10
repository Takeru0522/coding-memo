import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing';

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Switch>
            <Route exact path='/' component={ Landing } />
          </Switch>
        </Router>
      </main>       
    </div>
  );
}

export default App;
