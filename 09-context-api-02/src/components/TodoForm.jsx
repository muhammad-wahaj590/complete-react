import React from 'react'
import { useState } from 'react';
import useTheme from '../context/Theme';
function TodoForm() {

    const {themeMode, darkMode, lightMode} = useTheme()

    const handleDarkMode = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus){
            darkMode()
        }else{
            lightMode()
        }
    }


    return (
        <form  className="flex">
            <input
                type="checkbox"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                checked={theme === "dark"}
                onChange={handleDarkMode}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

