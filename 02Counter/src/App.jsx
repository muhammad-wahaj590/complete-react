import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter = 15;
  const [counter, setCounter] = useState(0)

  // what if agar mujhy ek sath increment karwana ho 5 ka to me counter + 5 k ilawa kisi or tareeqe se bhi increment kar sakta hun or woh yeh hai 

  // const addCounter = () => {
  //   setCounter(prevCounter => prevCounter + 1)
  //   setCounter(prevCounter => prevCounter + 1)
  //   setCounter(prevCounter => prevCounter + 1)
  //   setCounter(prevCounter => prevCounter + 1)
  // }

  const addCounter = () => {
    // counter = counter + 1;

    if(counter === 20) {
      counter = counter
    }else{
      setCounter(counter + 1);
    }
    console.log("clicked", counter);
  }

  const removeCounter = () => {

    if(counter < 1) {
      counter = counter;
    }else{
      setCounter(counter - 1);
    }
  }

  return (
    <>
     <h1>chaye or react</h1>
     <h2>Counter {counter}</h2>

     <button onClick={addCounter}>Add Value</button>
     <button onClick={removeCounter}>Remove Value</button>

     <p>Footer: {counter}</p>
    </>
  )
}

export default App

// is project me yeh seekha k kyon hooks ka use kia jata hai or iska jawab yeh hai k hooks ap k ui ko ek sath trigger kar sakty ek hi waqt me jab aap ek jagah se kisi value ko update karna chaho - or isme hamne usestate hook k bary me parha hai jis k muakmmal info notes me mojood hai 
