import React from 'react'
import { Mission } from '../../../typs'
import { useGlobalTodo } from '../../context/Context'
import './ToDo_card.css'

interface PropsToDo_card {
  task: Mission
}

const ToDo_card: React.FC<PropsToDo_card> = ({task}) => {
  const { DeleteMission, changeStatus } = useGlobalTodo()
  return (
    <div className="card ">
    <h2 onClick={() => changeStatus(task.id!)}>
      <label htmlFor=""> {task.completed? " ✅ ": " ❌ "} </label></h2>
      <h4>task name:</h4>  <h5>{task.name}</h5>
      <button onClick={() => DeleteMission(task.id! )} > delete </button>

    </div>
  )
}

export default ToDo_card
