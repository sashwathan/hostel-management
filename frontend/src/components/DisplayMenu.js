import React, { useState } from "react";
import Menu from "./Menu";
import Food from "./Food";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DisplayMenu = () => {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <>
      <Navbar />
      <div className=" bg-gray-50 flex flex-col md:flex-row">
        <Menu selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
        <div className="flex-1 p-4 text-sm md:text-base">
          <Food selectedDay={selectedDay} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DisplayMenu;
