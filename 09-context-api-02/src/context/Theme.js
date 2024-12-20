// yahan pe ham context api ko different approach se banayen ge is main hamen do different files banany ki zaroorat nhi hongi context main ham ek hi file main kaam kar sakty hain yeh syntax bhi kisi kisi production main use hota hai 

import React from 'react'
import { createContext, useContext } from 'react'

// yeh bhi esi hi hoa purany ki tarah bas syntax different hai createContext bana kar is main ham default value bhi de sakty 
// createContext main aap initially value de sakty ho default pe aap initially kia value deni chahty 
export const ThemeContext = createContext({  //yahan pe ham kuch bhi pass kar sakty hain variable bhi state bhi ya methods bhi 
    themeMode: "light",  //themeMode jab bhi call ho to bydefault light ho kyon k khali hoga to crash ho jaye ga 
    darkMode: () => {},  //darkMode ya light mode se bhi set kardety | yeh empty methods hain
    lightMode: () => {}
})

export const ThemeProvider = ThemeContext.Provider  //ese bhi ek hi file main kar sakty yeh

export default function useTheme() {
    return useContext(ThemeContext)
}

// tailwind se darkmode banany k liye config pe darkMode:classes set karna hoga 