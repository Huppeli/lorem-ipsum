import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from './components/Login';
import Feed from './components/Feed';
import './App.css';

class App extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/feed/" component={Feed} />
        </div>
      </Router>
    );
  }
}

export default App;
