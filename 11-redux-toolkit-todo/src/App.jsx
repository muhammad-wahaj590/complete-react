import { useState } from 'react'
// store or provider ko import karna hoga yahan ya main.jsx pe jese context api main kia tha wrap karne k liye 
import {Provider} from 'react-redux'
import {store} from './app/store'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {


  return (
    <>
    <h1>Todo Redux</h1>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
