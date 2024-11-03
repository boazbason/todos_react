import AddCompo from '../ADD_compo/AddCompo'
import Show_compo from '../Show_compo/Show_compo'
import React from 'react'
import './App_compo.css';

const App_compo: React.FC = () => {
  return (
    <div>
      <AddCompo/>
      <Show_compo/>
    </div>
  )
}

export default App_compo
