import React, { Component } from 'react'

export default class News extends Component {
  render() {
    return (
      <section className="news-section">
        <div className="hero-img">
          <h1><a href="http://viewport.surge.sh/">ViewPort News</a></h1>
          <img src="/img/viewport-news-img.jpeg" alt="Viewport-news" />
        </div>
      </section>
    )
  }
}



      // <div className="hero-img">
      //   <h1><a href="http://viewport.surge.sh/" target="_blank">Viewport News</a></h1>
      //   <img src="/img/viewport-news-img.jpeg"></img>
      // </div>
