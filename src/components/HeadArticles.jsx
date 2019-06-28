import React, { Component } from 'react'

export default class HeadArticles extends Component {
  render() {
    return (
      <div>
        <img className="cover-image" src={`https://images.unsplash.com/photo-1507290439931-a861b5a38200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2380&q=80`} alt="" />
        <div>
          <h2> Title: Something </h2>
          <h2> Author: someone</h2>
          <small> Date: July 28th, 2019.</small>
        </div>
      </div>
    )
  }
}
