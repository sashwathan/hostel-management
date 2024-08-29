import React from "react";

const rulesData = [
  { icon: "https://img.icons8.com/ios/50/000000/music.png", text: "No loud music after 10 PM." },
  { icon: "https://img.icons8.com/?size=100&id=NeXNwU2Bvz7l&format=png&color=000000", text: "Visitors must register at the front desk." },
  { icon: "https://img.icons8.com/ios/50/000000/clean.png", text: "Keep common areas clean." },
  { icon: "https://img.icons8.com/ios/50/000000/no-smoking.png", text: "No smoking inside the hostel." },
  { icon: "https://img.icons8.com/ios/50/000000/no-alcohol.png", text: "No alcohol consumption in common areas." },
  { icon: "https://img.icons8.com/ios/50/000000/lock.png", text: "Secure your belongings and lock your room when not in use." },
  { icon: "https://img.icons8.com/?size=100&id=106514&format=png&color=000000", text: "Pets are not allowed in the hostel." },
  { icon: "https://img.icons8.com/ios/50/000000/food.png", text: "No cooking in the rooms. Use the designated kitchen area." },
  { icon: "https://img.icons8.com/ios/50/000000/bed.png", text: "Respect other guests' privacy and sleep schedules." },
  { icon: "https://img.icons8.com/?size=100&id=I434I5q3Q0FG&format=png&color=000000", text: "Use laundry facilities responsibly and clean up after use." },
  { icon: "https://img.icons8.com/?size=100&id=Kk6FazFwbvkv&format=png&color=000000", text: "Breakfast is served from 7 AM to 10 AM only." },
  { icon: "https://img.icons8.com/ios/50/000000/phone.png", text: "No loud phone calls in shared areas." },
];

const Rules = React.forwardRef((props, ref) => (
  <div className="mb-8" ref={ref}>
    <h2 className="text-2xl font-semibold mb-6 text-green-500">Rules</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {rulesData.map((rule, index) => (
        <div
          key={index}
          className="bg-gray-100 px-4 py-2 rounded-lg shadow-md text-sm flex items-center gap-3"
        >
          <img
            src={rule.icon}
            alt={`Rule icon ${index + 1}`}
            className="w-6 h-6"
          />
          {rule.text}
        </div>
      ))}
    </div>
  </div>
));

export default Rules;
