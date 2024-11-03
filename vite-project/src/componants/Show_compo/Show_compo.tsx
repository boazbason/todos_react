import { useGlobalTodo } from '../../context/Context';
import ToDo_card from '../toDo_card/ToDo_card';
import React from 'react'
import './Show_compo.css'

const Show_compo: React.FC = () => {
  const { toDoList } = useGlobalTodo(); 

  return (
    <div>
      {toDoList.map((task) => (
        <ToDo_card key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Show_compo;