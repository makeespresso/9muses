import React, { Component } from 'react';
import HeadArticles from './HeadArticles';

export default class LandingPage extends Component {
  render() {
    return (
      <section>
        <img className="cover-image" src="/img/oranges-pattern.jpeg" alt="" />
        <HeadArticles/>
      </section>
    )
  }
}




