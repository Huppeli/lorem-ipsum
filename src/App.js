import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from './components/Login';
import Feed from './components/Feed';
import Index from './components/Index';
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
          <Route path="/index" component={Index} />
        </div>
      </Router>
    );
  }
}

export default App;
