import { useState } from 'react'

import Read from "./Components/Read"
import Create from "./Components/Create"

const App = () => {

   const [todos , settodos] = useState([
    {
      id: 1,
      title:"Do Your Pending Work",
      isCompleted: false
    }
  ]);

  return (
    <div className=" flex w-screen h-screen bg-gray-800 p-10">
     <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
    </div>
  )
}

export default App
