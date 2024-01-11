import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <Link to = '/'><button>Back</button></Link>
      <h1>Home</h1>
    </div>
  )
}

export default Home