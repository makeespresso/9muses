import React, { Component } from 'react'
import { API_GeekJokes } from '../services/API';

export default class SmallCard extends Component {
  render() {
    //let jokesArray = Object.values(this.props)  //i need to take out the values of this props. <- not using this bcs returns one array inside another one [[...]]
    console.log(this.props)
    // let { data, type } = this.props
    // console.log(data, type)      // <<== type will be used to have a conditional rendering of the data
    return (
      <div className="smallCard">
        {
          //         console.log(type)
          //         switch (type) {
          //           case "joke":
          //             map del array de jokes en 1 h2
          //             <h2> joke </h2>
          //       break;
          //       case "news":
          //       map de news si viene con descr, pic, title
          //               <h2> joke </h2>
          //       break;
          //       case "music":
          //       map con song,
          //         <h2> joke </h2>
          // break;
          //   default:
          //     break;
          // }
        }
        <div>
          <h2> Title: Something</h2>
          <h2> Author: Someone</h2>
          <small> Date: Everyday</small>
        </div>
      </div>
    )
  }
}