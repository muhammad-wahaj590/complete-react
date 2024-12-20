// sirf ek emthod createSlice se slice ban jaye ga lkn ham do use kaeren ge todo k liye nanoid jis se unique id mil saken 
import { createSlice, nanoid } from "@reduxjs/toolkit";

//ab is k bad store ki initialState bataye ge|yeh batata k initail kia hai store main|kuch bhi rakh sakty is main obj bhi 
// yeh just ek object banaya gaya hai or is main ham kuch bhi pass kar sakty 
// yeh apka state hai todos 
const initialState = {
    todos: [
        {
            id: 1,
            text: "hello world"
        }
    ]
}

//ab banayen ge slice jo k reducer ka bara version hai or reducer khud ek function | isko export karen ge taky agy kam aye
// is main bhi object hi pass karen ge 
// is main name diye jaty hain 
// or initialState bhi agar uper define to sirf refrence  neechay 
// phr reducers yeh ek property hi hai (is main ati hai properties or function)
// redux toolkit main declaation k sath function ki definition bhi likhtay hain 
// addTodo main do cheezen milen gi ek state or dosra action
// state: initialStatemain kia kia values huain un ka access degi | current state jo hoti
// action :jab koi value aye | jo bhi data pass ho raha hai 
// ab addTodomain ek todo lana hai woh kese aye ga action se or us k liye id bhi lagy gi to ese karen ge or todos  main object hi arahy to yahan bhi obj 
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // yahan pe database fetch bhi kar sakty or api bhi fetch kar sakty bas akhir main push wala kaam same hi hai state ka  
            const todo = {
                id: nanoid(),   //unique ids k liye
                text: action.payload  //text kuch bhej raha ho store to us k liye action | payload ek obj hai jis ain kuch bhi asakta text email etc 
            }
            state.todos.push(todo) //state k access k liye state jo hai woh todos hai or usy push kardia todo pe 
        },
        // ab yeh jo todos hain inhy override karna hai | jo id di hai unhy match nhi karo baqiyon ko karlo 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        // updateTodo: (state, action) => {
        //     state.todos = state.todos.map((todo) => todo.id === action.payload ? action : todo)
        // },

        // deleteTodo: (state, action) => {
        //     state.todos = state.todos.filter((todo) => todo.id !==action.payload)
        // }
    }

})
// ab reducer ban gaya lkn yeh is tarah se export nhi kia jata to is bhi steps hain 
// sab se pehlay jitni functionality hai usy export karen ge  kyon k jo addTodo or removeTodo hai ham isi k through hi state ko handle karen ge 
// yeh ham ne inidividually functionality export kari hai kyon k yeh hamen components main kaam aye ga  

// now ab jo store hai jo app folder main banaya tha woh abhi khali ghoom raha ahi us store ko bhi awareness chahiye in sary reducers k bary main nhi to yeh store maintain nhi kar paye ga kyon k woh store ek restricted store hai jo kisi bhi value ko le kar update nhi kar leta hun  balky unhi value ko leta jo reducers se us main registerd hain unhi ko hi update karta hun 
export const {addTodo, removeTodo} = todoSlice.actions

// to hamen sary reducers ko export karna hui pary ga 

export default todoSlice.reducer 