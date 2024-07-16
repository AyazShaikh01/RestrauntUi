// src/SpecialMenu.js
import React from "react";

const SpecialMenu = () => {
  const menuItems = [
    { name: "FINES TARTARE STEAK", price: 50 },
    { name: "CREAMY CHICKEN SOUP", price: 60 },
    { name: "BOILED EGGS ON TOAST", price: 120 },
    { name: "BEST ROASTED RUMSTEAK", price: 150 },
    { name: "RISOTTO & MUSHROOMS", price: 90 },
  ];

  return (
    <div className="bg-customPalette-Bg2 text-white p-3">
      <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 h-auto md:h-96 flex flex-col justify-start py-5 px-7  rounded-md  bg-customPalette-Bg2">
          <h1 className="text-4xl my-5">Special Meals</h1>
          <div>
            {menuItems.map((item) => (
              <div key={item.name} className="flex justify-between border-b border-gray-700 pb-2 my-3">
                <span className="tracking-widest px-2 py-1">{item.name}</span>
                <span className="text-yellow-400 px-2 py-1">${item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <img
          src="/src/assets/Menu-Img-02.jpg"
          alt="Food"
          className="w-full md:w-1/2 h-auto md:h-96 object-cover rounded-md shadow-lg mx-2 zoom-on-hover"
        />
        
      </div>
    </div>
  );
};

export default SpecialMenu;
