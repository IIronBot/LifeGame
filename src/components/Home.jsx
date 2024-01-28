import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import {CreateGoal, GoalRef} from './CreateGoal.jsx';
import './Home.css'

const Home = () => {
  const [showNewGoal, setShowNewGoal] = useState(false)
  const toggleNewGoal = () => {
    if(!showNewGoal) {
      GoalRef.current.classList.add("display")
    }
    else {
      GoalRef.current.classList.remove("display")
    }
    setShowNewGoal(!showNewGoal)
  }

  return (
    <div className='Home'>
        <Link to = '/'><button>Back</button></Link>
        <button onClick={() => {
          toggleNewGoal()
        }}>New Goal</button>
      <h1>Home</h1>
      <CreateGoal />
    </div>
  )
}

export default Home