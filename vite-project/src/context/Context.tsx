import { Mission } from "../../typs";
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface TodoProviderProps {
  children: ReactNode;
}

interface ContextProps {
  toDoList: Mission[];
  AddMission: (newMission: Mission) => void;
  DeleteMission: (id: string) => void;
  changeStatus: (id: string) => void;
}


const TodoContext = createContext<ContextProps | null>(null);

const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
  const [toDoList, setToDoList] = useState<Mission[]>([]);

  const updateLocalStorage = () => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  };
  
  useEffect(() => {
    const storedList = localStorage.getItem("toDoList");
    if (storedList) {
      setToDoList(JSON.parse(storedList));
    } else {
      localStorage.setItem("toDoList", JSON.stringify(toDoList));
    }
  }, []);
  
  
  
  
  const AddMission = (newMission: Mission) => {
    newMission.id = uuidv4();
    setToDoList([...toDoList, newMission]);
    toDoList.push(newMission);
    updateLocalStorage();
    
  };

  const DeleteMission = (id: string) => {
    setToDoList(toDoList.filter((mission) => mission.id !== id));
    updateLocalStorage();
  };

  const changeStatus = (id: string) => {

    
    toDoList.map((mission) => {
      if (mission.id === id) {
        mission.completed = !mission.completed };
      })
      
  
    updateLocalStorage();
    setToDoList([...toDoList])
    
  };

  return (
    <TodoContext.Provider value={{ toDoList, AddMission, DeleteMission, changeStatus }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useGlobalTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useGlobalTodo must be used within a TodoProvider");
  }
  return context;
};

export { TodoContext, TodoProvider };