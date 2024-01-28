import React, { useEffect, useRef } from 'react'
import './CreateGoal.css'
export let GoalRef
export const CreateGoal = () => {
   GoalRef = useRef()
  useEffect(() => {
    console.log(GoalRef.current)
  },[])
  return (
    <div className='newGoalContainer' ref={GoalRef}>
      <h1>New Goal</h1>
      <>
        <label for="Goal">Goal</label>
        <input type="text" id ='Goal'/>
      </>
      <>
        <label for="">Something</label>
        <input type="text" />
      </>
      <>
        <label for="">ANother</label>
        <input type="text" />
      </>

    </div>
  )
}

