// sab se pehlay configureStore method ko import karna core redux se 
import {configureStore} from '@reduxjs/toolkit'
// ab todoReducer ko le ayen ge yahan | store ko reducer ki knowledge chahiye tji 
import {todoSlice} from '../features/todo/todoSlice'

// ab is methdo ko use karlen ge ziadatar is main object hi lety hain 
export const store = configureStore({
    reducer:  todoSlice
})

// next ham banayen ge reducers 