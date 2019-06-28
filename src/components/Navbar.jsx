import React from 'react';

import { Link } from 'react-router-dom';

export default () => {
  return (
    <div id="navbar">
      <Link to="/"><h1>9musesnav.</h1></Link>
      <section id="Links">
        <Link to="/GeekJokes">GeekJokes</Link>
        <Link to="/Music">Music</Link>
        <Link to="/Articles">Articles</Link>
        <Link to="/AboutUs">About 9 muses</Link>

      </section>
    </div>
  )
}



// IN ROUTES WE USE EXACT PATHS 