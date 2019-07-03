import React, { Component } from 'react';
import { getNextShows } from '../services/artsyAPI';

export default class SmallCard extends Component {
  constructor() {
    super();
    this.state = {
      shows: [],
      gotShows: false
    }
  }

  // this is a function that we will use at the input property onClick.
  next = async (PARAMS) => {
    PARAMS = PARAMS.replace("https://api.artsy.net/api", "")
    console.log(PARAMS)
    const showData = await getNextShows(PARAMS)
    this.setState({
      shows: showData.shows,
      gotShows: true
    })
    console.log(this.state);
  }

  //This is render has upcoming and next shows input
  render() {
    //retriving props data
    //console.log(this.props.data.shows)
    let { shows, next } = this.props.data
    //console.log(shows) // type will be used to have a conditional rendering of the data
    return (
      <div className="smallCard">
        {
          shows.map(show => (
            // console.log(show.name, show.description, show.status)
            <div className="events-card" key={show.id}>
              <h2>{show.name}</h2>
              <p>{show.description}</p>
              <small>Status: {show.status}</small>
              <br></br>
            </div>
          ))
        }

        {/*In this section, the console returns true when we have data. Here I'm conditionally renderning  that if it is true, load the shows and will be displayed in a div called events-card and from there we are calling keys from the api */}
        {this.state.gotShows === true ?
          this.state.shows.map(show => (
            // console.log(show.name, show.description, show.status)
            <div className="events-card" key={show.id}>
              <h2>{show.name}</h2>
              <p>{show.description}</p>
              <small>Status: {show.status}</small>
              <br></br>
            </div>
          ))
          :
          <h4>See more</h4>
        }
        {/* This is the onClick event that has an annonymus function so we can send attributes to the _NEXT_ function, if we do not have an annonymus function {this.next} and we wouldn't be able to send the attrs with the parentesis. */}
        {this.state.gotShows === true ? null : <input type="button" onClick={() => this.next(next)} value="Show" />}
      </div>
    )
  }
}
