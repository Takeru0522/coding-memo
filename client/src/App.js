import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Html from './Html';
import Header from './Header';



function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Router>
          <Switch>
            <Route exact path='/' component={ Landing } />
            <Route exact path='/html' component={ Html } />
          </Switch>
        </Router>
      </main>       
    </div>
  );
}

export default App;
