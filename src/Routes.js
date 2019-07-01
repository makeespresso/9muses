import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Discover from './components/Discover';
import FillArticles from './components/FillArticles';
import News from './components/News';
import Music from './components/Music';
// import Home from './components/Home';
// import AllB from './components/beers/All';
// import RandomB from './components/beers/Random';
// import NewB from './components/beers/New';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/Discover" component={Discover} />
      <Route exact path="/Music" component={Music} />
      <Route exact path="/Articles" component={FillArticles} />
      <Route exact path="/News" component={News} />
    </Switch>
  )
}
export default Routes