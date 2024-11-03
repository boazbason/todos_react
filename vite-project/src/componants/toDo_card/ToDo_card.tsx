import React from 'react'
import { Mission } from '../../../typs'
import { useGlobalTodo } from '../../context/Context'

interface PropsToDo_card {
  task: Mission
}

const ToDo_card: React.FC<PropsToDo_card> = ({task}) => {
  const { DeleteMission, changeStatus } = useGlobalTodo()
  return (
    <div>
    <h2 onClick={() => changeStatus(task.id!)}>{task.completed? "✅": "❌"}</h2>
      <h2>task name : {task.name}</h2>
      <button onClick={() => DeleteMission(task.id!)}>delete</button>

    </div>
  )
}

export default ToDo_card
