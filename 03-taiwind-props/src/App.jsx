import { useState } from 'react'

import './App.css'
import Card from './Card'

function App() {

  const myObj = [1,2,3,4,6,7]

  return (
    <>
      <h1 className='bg-red-600 text-amber-400 rounded-2xl p-5 my-5'>tailwind or props</h1>

      <Card  username="ali haider" btnText="learn more"/>
      <Card  username="amna khan" myObj={myObj}/>

    </>
  )
}
// myObject={myObj} is tarah se kisi variable ko ese props se pass karwa sakty hain 

export default App
