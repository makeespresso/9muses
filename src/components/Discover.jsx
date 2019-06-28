import React, { Component } from 'react'
import { API_GeekJokes } from '../services/API';
import SmallCard from './SmallCard';
import { getArtsyToken, getArtist } from '../services/artsyAPI';

export default class GeekJokes extends Component {
  constructor() {
    super();
    this.state = {
      jokes: [],
      gotJokes: false
    }
  }

  componentDidMount = async () => {
    await getArtist("andy-warhol")
      .then(r => console.log(r))
      .catch(e => console.log(e))

    for (let i = 0; i < 11; i++) {
      API_GeekJokes()
        .then(r => {
          this.state.jokes.push(r)
          // console.log(r)
          if (i === 10) {
            this.setState({ gotJokes: true })
            //console.log("LLEGA AL 10")
          }
        })
        .catch(e => console.log(e))
    }
  }


  render() {
    return (
      <div>
        <h1>Discover</h1>
        {this.state.gotJokes === true ?
          <SmallCard data={this.state.jokes} type="joke" />
          : null}
      </div>
    )
  }
}
