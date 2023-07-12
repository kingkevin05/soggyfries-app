import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MusicPage from './MusicPage';
import ShopPage from './ShopPage';
import ContactPage from './ContactPage';
import LandingPage from './LandingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/music" component={MusicPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
