//ab jo todos context se ayen ge unhy kahin store karna hoga or phr unhy update bhi karna hoga us k liye ham use karty hain usestate or byDefault usy empty array rakhen ge null rakha to masla ho sakt ahi k loop nhi lagy ga is lioye empty array
//ab is main todo providr se wrap karna hoga or us s ehamara kaam complete nhi hoga hamen values bhi deni hongi 
import { useEffect, useState } from 'react'
import './App.css'

import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoProvider } from './context/TodoContext'


function App() {
  
  // is main todos ek array hai 
  const [todos, setTodos] = useState([])

  // ab is k andar jo todo pass kia hai woh form se aye ga woh state wala todo nhi hai state waly todo main sary todos hain or ham ek todo ki baat kar rahy abhi jo list main dal rahy 
  //ab isko list main add karne k liye setTodo method ko call karen ge is tarah se pr is main setTodos(todo) kardene se hamary pas sirf add wala todo list main aye ga or prev k sary todo nikal jayen ge | ab agar purany states ka bhi access chahiye to ham settodo main jo callback hota woh use karen ge 
  // ...prev (is se yeh hoa k purani sari values spread karwadin)
  // id:Date.now() (yeh is liye lia k kpoi na koi id chahiye hogi loop k lioye to date now se koi bhi random date ajaye gi or us k bad ...todo se sary values  todo ki mainay spread karwa diye)
  
  const addTodo = (todo) => {
    setTodos((prev) => [ {id:Date.now(), ...todo}, ...prev])
  }

  // ab is main ham wohi parametres pass karen ge jo context pe kiye thy 
  // hamen is state k todos ka loop lagana hai k konsi id match ho rahi to usy uypdate kardo us k liye ham .map ya foreach use kar sakty hain 
  //prev main sari todos ki list hai to us pe .map function lagaden ge 
  //or in saron main se ek ek kar k hamen select karna hai todo to us k liye eachTodo pass kardete
  //phr condition lagayi k agar eachtodo main jo todo araha uski id agar match ho rahi to usy new (todo) se replace kardo nhi to old todo (eachTodo) hi rehne do 
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((eachTodo) => (eachTodo.id === id ? todo : eachTodo)))
  }

  // delete functionality main yeh kia k delete k liye map method appropriate nhi hai to us k liye filter use kia hamne or condition likhi k jo satisfied kar raha condition ko woh return karde or baqi wahin rehne de to is tarah se sirf wohi ids ayin jo match nhi ho rahin thin or jo match hoi woh nhi ayi 
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachTodo) => eachTodo.id !== id))
  }

  // ab hamen todos k object main ja kar complete wali cheez ka toggle handle karna hai 
  // is main bhi ham callback se hi start karen ge 
  // ab check karo k jo eachTodo pe ham abhi hain woh id se match ho raha hai ? agar nhi ho raha to eachTodo hi rehne do or agar ho raha hai to prev todos ko wesi rehne do or jo id match hoi hai uska complete toggle kardo 
  // or kyon k har todo ek object hi hai to usy object pe hi handle kar sakty to is pe pehlay hamne sari values lelin or phr hamne complete se override kardia 
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((eachTodo) => eachTodo.id === id ? {...prev, complete: !eachTodo.complete} : eachTodo))
  }

  // local storage main set karty time batana hota hai k key kia rakho ge or value kia rakho ge or get karty time sirf key deni hoti 
  // esi konsi query method hai jo local storage se todos pe sari value le aye render hoty waqt (useEffect) hai 
  // abhi pehlay ham get karen ge phr set karen ge pehlay get karna zaruri hai 
  //isko json main is liye kia kyon k har local storage se har bar string format me hi nhi ajata is liye woh jis pe bhi araha ho usy any den ahoga or json main convert kar k lkn | zaruri nhi json ka matlab {} yeh ho json main array bhi ho sakta hai 
  //pehlay check karo k todos hain k nhi agar nhi hain to woh application crash akr jaye gi is liye if lagaya or phr uski length kyon k empty to already hai hamen 0 se bari length ki value chaghiye


  useEffect(() => {
    const todos = json(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  // ab hamary pas application k load hoty hi sari todos alues agayin to main usko local storage pe add karwana chahta hun 
  // jo keys ka naam lety time rakha hai wohi dety time bhi rakhna hoga 
  // or hamen values string ki form main deni to us k liye ek method hai json.stringify(todos) is se sari values string main ajayen gi 
  useEffect(() => {
    localStorage.setItem("todos", json.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {/* {} is se khud se return karna parta | () is se auto return ho jata  */}
                        {/* keys is liye din k har ek item ek div hoga or us div main values same to nhi woh janny k liye keys lagayin nhi to performance issues any lagty  */}
                        {
                          todos.map((todo) => (
                            <div key={todo.id}
                            className="w-full">
                              <TodoItem  todo={todo}/>
                            </div>
                          ))
                        }
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
