import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';

function TodoItem({ todo }) {
    
    //initially useTodo use kar k methods import karwa liye
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()
    // isTodoEditable main yeh hai k jab todo pe toggle true kia to us main se edit ka option hat gaya to us functionality k liye yeh state banayi | or initially to woh false hi hota edit wala option to false pass kardia
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    // edit option pe click iia to jo msg update ho woh uski id k sath ho or phr msg show ho to us k liye yeh banaya | or is main todo.todo yeh hai individual todo k update wala todo ko target karna 
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    // is main ham edit karty waqt updateTodo method ka use kia to update karty waqt hamen id chahiye hogi or us k sath hi ...todo is se sari values spread ho gayin phr jo udpate kia hai woh update ajaye ga todoMsg se | todo ek object hai to usko object main hi pass karen ge 
    // phr us k bad setIsTodoEditable(false) ko wapsi false karden ge 
    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    } 

    const toggle = () => {
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggle}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;

