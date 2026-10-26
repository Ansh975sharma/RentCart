import React from 'react'
import { Outlet } from "react-router";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar"
function Main() {
  return (
    <div>
<Navbar/>
<Outlet/>
<Footer/>
    </div>
  )
}

export default Main