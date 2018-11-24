import React, { Component } from 'react';
<<<<<<< HEAD
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
=======
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div>
        Kesko Appi
      </div>
>>>>>>> a18df18e8f25979fa935d2848871d5b1e30a5812
    );
  }
}

export default App;
