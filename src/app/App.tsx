import React from 'react';
import 'materialize-css';

import { Switch, Route, BrowserRouter } from 'react-router-dom'

import NavBar from './NavBar'
import About from './About'
import LandingPage from './Landing'
import Details from './Details'

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/details/:id" component={Details} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
