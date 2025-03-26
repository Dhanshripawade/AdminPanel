import { useState } from 'react'

import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar/> 
    </>
  )
}

export default App
