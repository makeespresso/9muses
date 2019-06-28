import React, { Component } from 'react'
import SmallCard from './SmallCard';

export default class FillArticles extends Component {
  render() {
    //MAP INSIDE RETURN
    return (
      <div>
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    )
  }
}
