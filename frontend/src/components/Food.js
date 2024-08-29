import React from "react";

const menuData = {
  0: {
    breakfast: ["Coffee", "Pumpkin-Sambar", "South Coconut chutney", "Ven Pongal"],
    lunch: ["Chapati", "Cucumber Raita", "Dal Palak", "Lauki Chawli Masala", "Plain Rice", "Soya Bath"],
    snacks: ["Indian Style Pasta", "Live Tea - Ginger"],
    dinner: ["Chapati", "Cucumber Raita", "Dhaba Dal", "Egg Masala South", "Mutter-Mushroom Masala", "Onion Pulao", "Plain Rice"],
  },
  1: {
    breakfast: ["Tea", "Pumpkin-Sambar", "South Coconut chutney", "Ven Pongal"],
    lunch: ["Chapati", "Cucumber Raita", "Dal Palak", "Lauki Chawli Masala", "Plain Rice", "Soya Bath"],
    snacks: ["Indian Style Pasta", "Live Tea - Ginger"],
    dinner: ["Chapati", "Cucumber Raita", "Dhaba Dal", "Egg Masala South", "Mutter-Mushroom Masala", "Onion Pulao", "Plain Rice"],
  },
  2: {
    breakfast: ["Milk", "Pumpkin-Sambar", "South Coconut chutney", "Ven Pongal"],
    lunch: ["Chapati", "Cucumber Raita", "Dal Palak", "Lauki Chawli Masala", "Plain Rice", "Soya Bath"],
    snacks: ["Indian Style Pasta", "Live Tea - Ginger"],
    dinner: ["Chapati", "Cucumber Raita", "Dhaba Dal", "Egg Masala South", "Mutter-Mushroom Masala", "Onion Pulao", "Plain Rice"],
  },
  3: {
    breakfast: ["Black Coffee", "Pumpkin-Sambar", "South Coconut chutney", "Ven Pongal"],
    lunch: ["Chapati", "Cucumber Raita", "Dal Palak", "Lauki Chawli Masala", "Plain Rice", "Soya Bath"],
    snacks: ["Indian Style Pasta", "Live Tea - Ginger"],
    dinner: ["Chapati", "Cucumber Raita", "Dhaba Dal", "Egg Masala South", "Mutter-Mushroom Masala", "Onion Pulao", "Plain Rice"],
  },
  4: {
    breakfast: ["Jaggery Coffee", "Pumpkin-Sambar", "South Coconut chutney", "Ven Pongal"],
    lunch: ["Chapati", "Cucumber Raita", "Dal Palak", "Lauki Chawli Masala", "Plain Rice", "Soya Bath"],
    snacks: ["Indian Style Pasta", "Live Tea - Ginger"],
    dinner: ["Chapati", "Cucumber Raita", "Dhaba Dal", "Egg Masala South", "Mutter-Mushroom Masala", "Onion Pulao", "Plain Rice"],
  },
  5: {
    breakfast: ["Horlicks", "Pumpkin-Sambar", "South Coconut chutney", "Ven Pongal"],
    lunch: ["Chapati", "Cucumber Raita", "Dal Palak", "Lauki Chawli Masala", "Plain Rice", "Soya Bath"],
    snacks: ["Indian Style Pasta", "Live Tea - Ginger"],
    dinner: ["Chapati", "Cucumber Raita", "Dhaba Dal", "Egg Masala South", "Mutter-Mushroom Masala", "Onion Pulao", "Plain Rice"],
  },
  6: {
    breakfast: ["Boost", "Pumpkin-Sambar", "South Coconut chutney", "Ven Pongal"],
    lunch: ["Chapati", "Cucumber Raita", "Dal Palak", "Lauki Chawli Masala", "Plain Rice", "Soya Bath"],
    snacks: ["Indian Style Pasta", "Live Tea - Ginger"],
    dinner: ["Chapati", "Cucumber Raita", "Dhaba Dal", "Egg Masala South", "Mutter-Mushroom Masala", "Onion Pulao", "Plain Rice"],
  },
  // Define menus for other days in similar format
};

const Food = ({ selectedDay }) => {
  const { breakfast, lunch, snacks, dinner } = menuData[selectedDay] || {};

  return (
    <div className="bg-green-200">
      <div className="flex-grow bg-green-200 p-4 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 shadow">
            <h3 className="text-green-500 font-semibold text-base sm:text-lg md:text-xl">Breakfast</h3>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">06:30 - 08:00</p>
            <ul className="mt-4 space-y-1 sm:space-y-2">
              {breakfast.map((item, index) => (
                <li key={index} className="border-b border-gray-200 pb-1 text-xs sm:text-sm md:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 shadow">
            <h3 className="text-green-500 font-semibold text-base sm:text-lg md:text-xl">Lunch</h3>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">12:30 - 14:30</p>
            <ul className="mt-4 space-y-1 sm:space-y-2">
              {lunch.map((item, index) => (
                <li key={index} className="border-b border-gray-200 pb-1 text-xs sm:text-sm md:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 shadow">
            <h3 className="text-green-500 font-semibold text-base sm:text-lg md:text-xl">Evening Snacks</h3>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">16:30 - 17:30</p>
            <ul className="mt-4 space-y-1 sm:space-y-2">
              {snacks.map((item, index) => (
                <li key={index} className="border-b border-gray-200 pb-1 text-xs sm:text-sm md:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 shadow">
            <h3 className="text-green-500 font-semibold text-base sm:text-lg md:text-xl">Dinner</h3>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">19:30 - 21:00</p>
            <ul className="mt-4 space-y-1 sm:space-y-2">
              {dinner.map((item, index) => (
                <li key={index} className="border-b border-gray-200 pb-1 text-xs sm:text-sm md:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;