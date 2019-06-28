import React, { Component } from 'react'
import { API_harvard } from '../services/API';

export default class SmallCard extends Component {

  componentDidMount = () => {
    API_harvard()
      .then(r => console.log(r))
      .catch(e => console.log(e))
  }

  render() {
    return (
      <div className="smallCard">
        {/* <img className="smallImg" src={` `} alt="" /> */}
        <div>
          <h2> Title: Stressed Out</h2>
          <h2> Author: Ana BMA</h2>
          <small> Date: EVRYDAY</small>
        </div>
      </div>
    )
  }
}