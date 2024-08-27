import React, { useState } from "react";
import Menu from "./Menu";
import Food from "./Food";
import Navbar from "./Navbar";
import Footer from "./Footer";


const DisplayMenu = () => {
    const [selectedDay, setSelectedDay] = useState(0);
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 flex">
    <Menu selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
    <Food selectedDay={selectedDay} />
  </div>
  <Footer/>
  </>
  )
}

export default DisplayMenu;