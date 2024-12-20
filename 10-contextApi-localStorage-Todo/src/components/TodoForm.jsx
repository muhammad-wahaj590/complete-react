import React from 'react'
import { useState } from 'react';
import { useTodo } from '../context/TodoContext';

function TodoForm() {
    // initially value null rakhen ge form input pe | yeh individual todo hai 
    const [todo, setTodo] = useState("")

    // ab hamen value le kar ani hai to addTodo k method ko yahan kese rakhen ge us k liye ham use karen ge useTodo kyon k usecontext useTodo main hi achuka hai ab context wali file main 
    const {addTodo} = useTodo()

    // methdo banayen ge add ka jis se add karwa saken todo ko kyon k hamne body to banayi hoi lkn usy yahan use bhi to karna hoga na 
    // yeh ek object le raha hai App.jsx wali file main hamne functionality ese define ki hoi k woh object spread kar raha to ham yeh kaam karen ge ab is tarah se khali andar todo nhi pass kar sakty kyon k functionality wese nhi define
    // {id:Date.now(), todo:todo, completed:false}  is main ham sab se pehlay is ko samaghty hain 
    // {id:Date.now()} ham yeh peechay functiona define kar chukay to wapsi define karne ki need nhi ab 
    // {todo:todo} new syntax k andar agar apki field ka name or apki values ka name same hai to ham ek bar likh sakty todo 
    // {completed:false} or is main hamne jo todo add kia hai woh initially checked main false rahy ga 
    // us k bad setTodo("") is tarah woh phr se empty ho jaye ga add hony k bad 
    const add = (e) => {
        e.preventDefault();
        if(!todo) return
        addTodo({todo:todo, completed:false})
        setTodo("")
    }

    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


