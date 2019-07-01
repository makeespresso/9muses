import React, { Component } from 'react'
import HeadArticles from './HeadArticles';
import FillArticles from './FillArticles';
import Music from './Music';

export default class LandingPage extends Component {
  render() {
    return (
      <section>
      
        <img className="cover-image" src="/img/oranges-pattern.jpeg" alt="" />
        <div Id="pattern"></div>
        <div Id="landing-page-banner"><h1>Discover</h1></div>
        <div Id="landing-page-banner"><h1>Music</h1></div>
        <div Id="landing-page-banner"><h1>Articles</h1></div>
        <div Id="landing-page-banner"><h1>News</h1></div>

      </section>
    )
  }
}




