import React from 'react';

import { Link } from 'react-router-dom';

export default () => {
  return (
    <div id="navbar">
      <Link to="/"><h1 className="logo">9muses</h1></Link>
      <section id="Links">
        <Link to="/Discover">Discover</Link>
        <Link to="/Music">Music</Link>
        <Link to="/Articles">Articles</Link>
        <Link to="/News">News</Link>

      </section>
    </div>
  )
}



// IN ROUTES WE USE EXACT PATHS 