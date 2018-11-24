import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Index from './components/Index';
import Coffee from './components/Coffee';
import './App.css';

class App extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/coffee/">I want coffee</Link>
              </li>
            </ul>
         </nav>
        
        <Route path="/" exact component={Index} />
        <Route path="/coffee/" component={Coffee} />
        </div>
      </Router>
    );
  }
}

export default App;
