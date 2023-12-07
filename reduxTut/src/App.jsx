import { useState } from 'react'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
function App() {


  return (
    <>
      <h1>Learn Redux</h1>
      <AddTodo/>
      <Todos/>
      </>
  )
}

export default App
