import { useState } from 'react'



function App() {
  const [color, setColor] = useState("olive")

  return (
    
      <div className='h-screen w-full duration-200'
      style={{backgroundColor: color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 rounded-xl'>
          <div className='flex flex-wrap justify-center'>
              <button onClick={() => setColor("red")} 
              className="text-white px-3 py-3" 
              >Red</button>
              <button
              className="text-white px-3 py-3"
               onClick={() => setColor("green")}>Green</button>
              <button
              className="text-white px-3 py-3"
               onClick={() => setColor("blue")}>Blue</button>
              <button
              className="text-white px-3 py-3"
               onClick={() => setColor("black")}>Black</button>
              <button
              className="text-white px-3 py-3"
               onClick={() => setColor("orange")}>Orange</button>
          </div>
        </div>
      </div>
    
  )
}

export default App
