import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout

// is Outlet se jahan isko dal dety sirf wahan changing karta matlab is tarah se is main header or footer ek jagah rahen ge lkn Outlet change hota rahy ga 