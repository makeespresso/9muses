import React, { Component } from 'react';
import SmallCard from './SmallCard';
import { getShows } from '../services/artsyAPI';

export default class GeekJokes extends Component {
  constructor() {
    super();
    this.state = {
      jokes: [],
      gotJokes: false,
      shows: [],
      gotShows: false
    }
  }

  componentDidMount = async () => {
    const showData = await getShows()
    this.setState({
      shows: showData,
      gotShows: true
    })
  }

  render() {
    return (
      <>
        <div className="hero-img">
          <h1>Discover Events</h1>
          <img src="/img/art01.jpeg"></img>
        </div>
        <div className="discover-info">
          <h2> Upcoming Events:</h2>
          <p>Find the best things to do all year with our NYC events calendar of 2019’s coolest events, including parades, concerts, films and art exhibits</p>
        </div>
        {this.state.gotShows === true ? <SmallCard data={this.state.shows} /> : <h2>Loading</h2>}
      </>
    )
  }
}

//discover component did mount, do runs the getShows api from services/ ArtsyAPI
//Artsy API gets a new token and request the data from the shows, THEN it does console.log the information from the aAPI and sends it back with a return
//Back in component did mount, the information retrieved from artsy does not get here, seems to be an asynchrnus issue, plis send jeeeelp
