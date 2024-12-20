// yahan pe ham context api ko different approach se banayen ge 
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

import { ThemeProvider } from './context/Theme'




function App() {
  
const [themeMode, setThemeMode] = useState("light")

const lightMode = () => {
  setThemeMode("light")
}

const darkMode = () => {
  setThemeMode("dark")
}

// actual change in theme | is se functionality add kar rahy 

useEffect(() => {
   document.querySelector('html').classList.remove("lightMode, darkMode")
   document.querySelector('html').classList.add('themeMode')
}, [themeMode])

  return (
    // abhi yeh jo method aye hain woh empty hain in main koi functionality nhi hai to main yahan pe uper isi name se functionality bhi add kar sakta hun in me
     <ThemeProvider value={{themeMode, lightMode, darkMode}}>  
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        <TodoItem />
                    </div>
                </div>
            </div>
    </ThemeProvider>
  )
}

export default App
