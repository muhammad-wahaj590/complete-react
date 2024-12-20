import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
 
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const copyToClipboard = useCallback(() => {
      passwordRef.current?.select(password)
      passwordRef.current?.setSelectionRange(0,100)        // password se ek range tak hi copy hongi values
      window.navigator.clipboard.writeText(password)
  }, [password])
  
  const passwordGenerator = useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if(numberAllowed){
        str += "0123456789";
      }
      if(charAllowed) str+="~`!@#$%^&*()_-=+'[]{},.";

      for(let i=1; i<length; i++){
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }

      setPassword(pass);

  }, [length,charAllowed, numberAllowed, setPassword])

  useEffect(() => {
        passwordGenerator()
  }, [length,charAllowed, numberAllowed, setPassword])

  return (
    <>
        <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-4 my-10 text-orange-500 bg-gray-700'>
          <h1 className='text-center text-white my-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
            type="text" 
            value={password}
            placeholder="Password"
            readOnly
            className='outline-none w-full py-1 px-3'
            ref={passwordRef}/>

            <button onClick={copyToClipboard} className='outline-none bg-blue-900 px-3 text-white font-medium'>Copy</button>
          </div>

          <div className='flex justify-center'>
            <div className='flex gap-2 items-center '>
              <input 
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {setLength(e.target.value)}}
              
              className="h-2"
               />
               <label>Length: {length}</label>
            </div>

            <div className='flex items-center mx-4 gap-2'>
              <input 
              type="checkbox"
              id="numberinput"
              defaultChecked={numberAllowed}
              onChange={() => {setNumberAllowed((prev) => !prev)}}
              />
              <label htmlFor="numberInput">Number</label>
            </div>

            <div className='flex items-center mx-4 gap-2'>
              <input 
              type="checkbox"
              id="charInput"
              defaultChecked={charAllowed}
              onChange={() => {setCharAllowed((prev) => !prev)}}
              />
              <label htmlFor="charInput">Characters</label>
            </div>
          </div>
        </div>
    </>
  )
}

export default App

// useCallback: Ye optimization ke liye istemal hota hai. Ye function ko tab call karta hai jab dependencies change hoti hain aur ek memorized function return karta hai.

// useEffect: Ye function ko tab run karta hai jab page pehli dafa render hota hai ya dependencies change hoti hain.

// useRef: Ye humare page par selected components ka reference dene ke liye istemal hota hai taake hum referenced values par functions perform kar saken.