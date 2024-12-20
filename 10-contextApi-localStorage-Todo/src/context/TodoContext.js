import { createContext, useContext } from "react";

// array wali line main jo itmes hain woh todo ko define kar rahy k us main id hogi har todo main or toggle bhi hoga or msg bhi hoga 
// or neechy sirf todoIems ki functions defien kiye hain lkn unki body nhi banyi woh bany gi wahan pe jahna yeh TodoContext import hoga or us main relevant parameters bhi liye hain 
export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}