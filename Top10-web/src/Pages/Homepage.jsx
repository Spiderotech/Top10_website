import React from 'react'
import Herosection from '../Components/Herosection'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Process from '../Components/Process'
import Companylist from '../Components/Companylist'

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <Process/>
    {/* <Companylist/> */}
    <Footer/>
    </>
  )
}

export default Homepage