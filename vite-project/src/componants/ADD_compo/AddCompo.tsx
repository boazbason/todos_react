import React, { useState } from 'react'
import { useGlobalTodo } from '../../context/Context'
import { Mission } from '../../../typs';


const AddCompo = () => {


  const { AddMission } = useGlobalTodo();
  const [inputName, setinputName] = useState<string>("")
  function sendNewMission() {
        
    if(inputName.length > 2){
      AddMission({name: inputName, completed: false})
    }
  }


  return (
    <div>
        <label htmlFor="">Add a mission</label>
      <input value={inputName} type="text" onChange={(e)=>{setinputName(e.target.value)}} />
      <button onClick={() => sendNewMission()}>Add</button>
    </div>
  )
}

export default AddCompo
