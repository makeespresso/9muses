import React, { Component } from 'react'
import HeadArticles from './HeadArticles';
import FillArticles from './FillArticles';

export default class LandingPage extends Component {
  render() {
    return (
      <section>
        <h1>ALL MIGHTY LANDING PAGE!</h1>
        <HeadArticles />
        <FillArticles />
      </section>
    )
  }
}
