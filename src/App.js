import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from './components/screens/Login';
import Feed from './components/screens/Feed';
import Index from './components/screens/Index';
import Profile from './components/screens/Profile';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
