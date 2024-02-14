import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div>
    <Navbar />
    <main className=" mt-20 p-4 sm:ml-64">{children}</main>
  </div>
  )
}

export default Layout