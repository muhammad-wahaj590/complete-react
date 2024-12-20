import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import Home from './components/Home/Home.jsx'
import User from './components/User/User.jsx'
import './index.css'
import Layout from './Layout.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [

//       {
//         path: "/",
//         element: <Home />
//       },

//       {
//         path: "/about",
//         element: <About />
//       },

//       {
//         path: "/contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// dosra tareeqa routing ka 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='user/:userId' element={<User/>} />   {/*  agar user khud koi url dal kar search kary to us k liye route  */}
      <Route
      loader={githubInfoLoader}
      path='/github' 
      element={<Github />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


// ab yahan pe App ko import nhi karen ge kyon k ham n e router ko install karlia hai to ham routerProvider karen ge install 
// is k bad ham router banayen ge jo ek method k sath banta createBrowserrouter() or yeh do tareeqe se banta hai yahan pe 
// 1 Pehla tareeqa) is main list bana kar path dedo phr element main layout de kar children dedo jo jo render karwany

// 2 dosra tareeqa yeh hai neechay wala 

//agar mujhy nesting karni hoi matlab about page pe ek or page k andar ja sakta main to us k liye mujhy about page pe <Route>or yahan pe phr se <Route likh kar nesting kar wa sakta  /></Route>

//loader wala kaam nhi samgha hai us k liye chai or react ki last 10 mints phr se dekhne hongy 

//dynamic values lety hain woh kaam userId main hoa wa
