import React, { Component } from 'react'
// import SmallCard from './SmallCard'

export default class FillArticles extends Component {
  render() {
    //MAP INSIDE RETURN
    return (
      <div className="articles-section">
        <div className="hero-img">
          <h1> In the know...</h1>
        </div>


        <div className="articles-section">

          <div className="third-div">
            <div className="article-content">
              <h1>Everything There Is To Know About Pricing Strategies For Your Mobile App</h1>
              <p>this is a brief explanation</p>
              <br></br>
              <small><a href="https://medium.com/swlh/everything-there-is-to-know-about-pricing-strategies-for-your-mobile-app-6b2d7dc3d6cb">Read more...</a></small>
            </div>
            <div className="article-img">
              <img src="/img/art1.jpeg" alt="stockimg"></img>
            </div>
          </div>

          <div className="third-div">
            <div className="article-content">
              <h1>10 Interview Questions Every JavaScript Developer Should Know</h1>
              <p>this is a brief explanation</p>
              <br></br>
              <small><a href="https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95">Read more...</a></small>
            </div>
            <div className="article-img">
              <img src="/img/art2.jpeg" alt="stockimg"></img>
            </div>
          </div>

          <div className="third-div">
            <div className="article-content">
              <h1>How to Design for the Web in 2019</h1>
              <br></br>
              <small><a href="https://medium.com/commitlog/how-to-design-for-the-web-in-2019-a0be4d6702e2">Read more...</a></small>
            </div>
            <div className="article-img">
              <img src="/img/art3.png" alt="stockimg"></img>
            </div>
        </div>
        </div>

      </div>

    )
  }
}




{/* <img src="/img/art1.jpeg" alt="stockimg"></img> */ }