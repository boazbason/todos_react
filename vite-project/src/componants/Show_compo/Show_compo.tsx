import React from 'react';
import { useGlobalTodo } from '../../context/Context';
import ToDo_card from '../toDo_card/ToDo_card';

const Show_compo = () => {
  const { toDoList } = useGlobalTodo(); // קריאה ישירה ל-useGlobalTodo

  return (
    <div>
      {toDoList.map((task) => (
        <ToDo_card key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Show_compo;