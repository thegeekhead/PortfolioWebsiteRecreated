import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// pages
import PageWrapper from './components/PageWrapper';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
// import Services from './components/pages/Services';
import Team from './components/pages/Team';
import Contact from './components/pages/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
          <Route
            exact={true}
            path="/"
            component={Home}
          />

          <Route
            path="/about"
            component={About}
          />

          <Route
            path="/portfolio"
            component={Portfolio}
          />

          {/* <Route
            path="/services"
            component={Services}
          /> */}

          <Route
            path="/team"
            component={Team}
          />

          <Route
            path="/contact"
            component={Contact}
          />
        </PageWrapper>
      </Router>
    )
  }
}

export default App;
