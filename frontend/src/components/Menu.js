import React, { useState } from "react";

const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

const Menu = ({ selectedDay, setSelectedDay }) => {
  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-gray-500 font-semibold mb-2 text-sm md:text-base">Days</h2>
      <ul className="space-y-2">
        {days.map((day, index) => (
          <li key={index}>
            <button
              className={`${
                selectedDay === index
                  ? "bg-green-200 text-green-700"
                  : "text-gray-700"
              } block w-full text-left p-2 rounded text-xs md:text-sm`}
              onClick={() => setSelectedDay(index)}
            >
              {day}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;