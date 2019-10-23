import React from 'react';
import logo from './logo.svg';
import CounterGroup from "./components/CounterGroup/CounterGroup"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/counter-group">
              <CounterGroup defaultCounter = {3}/>
            </Route>
            <Route path="/">
            </Route>
          </Switch>
        </div>
        <Link to="/counter-group">Counter Group</Link>
        <Link to="/">Home</Link>
      </Router>
      </header>
    </div>
  );
}


export default App;
