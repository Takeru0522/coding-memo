import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Html from './Html';
import Header from './Header';
import Auth from './Auth';



function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Router>
          <Switch>
            <Route exact path='/' component={ Landing } />
            <Route exact path='/html' component={ Html } />
            <Route exact path='/auth' component={ Auth } />
          </Switch>
        </Router>
      </main>       
    </div>
  );
}

export default App;
