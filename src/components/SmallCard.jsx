import React, { Component } from 'react'

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



  //This is render has upcoming and next shows input .
  render() {
    //retriving props data
    //console.log(this.props.data.shows)
    let { shows, next } = this.props.data
    //console.log(shows) // <<== type will be used to have a conditional rendering of the data
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
          <h3>see more</h3>
        }
        {/* This is the onClick event that has an annonymus function so we can send attributes to the _NEXT_ function, if we do not have an annonymus function {this.next} and we wouldn't be able to send the attrs with the parentesis. */}
        {this.state.gotShows === true ? null : <input type="button" onClick={() => this.next(next)} value="Show 5 more" />}

      </div>
    )
  }
}




// <div className="train-list">
//         {/* Object.values es una funcion estandar de js que toma los valores del objeto dentro del props y los regresa en un array.  */}
//         {Object.values(this.props).length !== 0 ?
//           // Le saco los valores al objeto y luego los mapeo 
//           Object.values(this.props).map((train) => (
//             // en esta parte ya nomas llamo los datos que me interesan sacar del array 
//             // this removes the train id key warning from the console <<< https://reactjs.org/docs/lists-and-keys.html#keys>>>>
//             <div className="train-card" key={train.id}>
//               <p>Name: {train.name}</p>
//               <p>Type: {train.train_type}</p>
//               <p>Distance: {train.km_traveled}</p>
//             </div>
//           ))
//           //este comentario sirve para verse en lo que llega la informacion del servidor.
//           : <h2>Loading...</h2>}


// // 0
//   // created_at: "2017-10-25T14:33:42+00:00"
//   // description: null
//   // end_at: "2105-01-01T12:00:00+00:00"
//   // id: "59f0a0c6a09a672d874d3dd1"
//   // is_fair_booth: false
//   // is_group_show: false
//   // is_institutional_show: false
//   // is_reference: true
//   // is_solo_show: true
//   // name: "Diego Cabeza"
//   // press_release: null
//   // sortable_name: "diego cabeza"
//   // start_at: "2105-01-01T12:00:00+00:00"
//   // status: "upcoming"
//   // updated_at: "2019-03-12T20:48:05+00:00"
//     // _links:
//     // artworks: {href: "https://api.artsy.net/api/artworks?show_id=59f0a0c6a09a672d874d3dd1"}
//     // images: {href: "https://api.artsy.net/api/images?show_id=59f0a0c6a09a672d874d3dd1"}
//     // permalink: {href: "http://www.artsy.net/show/diego-cabeza"}
//     // self: {href: "https://api.artsy.net/api/shows/59f0a0c6a09a672d874d3dd1"}