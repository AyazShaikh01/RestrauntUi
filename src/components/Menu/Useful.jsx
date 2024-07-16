// src/SpecialMenu.js
import React from "react";

const Useful = () => {
  return (
    <div className="bg-customPalette-navBG text-white p-8">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <img
          src="/src/assets/About-Us-03.jpg"
          alt="Food"
          className="w-50 md:w-1/2 h-auto md:h-96 object-cover rounded-md shadow-lg mx-2 zoom-on-hover"
        />

        <div className="w-full md:w-1/2 h-auto md:h-96 flex flex-col justify-start py-5 px-2 rounded-md">
          <h1 className="text-5xl my-5 tracking-widest">Useful Tips</h1>


          <div className="flex flex-col justify-center items-start">
          <div className="flex justify-center items-center gap-3 py-2">
            <i class="ri-checkbox-circle-line"></i>
            <h2>
              You can easily make your diet a bit healthy by choose whole grain.
            </h2>
          </div>
          <div className="flex justify-start items-center gap-3 py-2">
            <i class="ri-checkbox-circle-line"></i>
            <h2>There are many varieties of whole grain bread available.</h2>
          </div>
          <div className="flex justify-center items-center gap-3 py-2">
            <i class="ri-checkbox-circle-line"></i>
            <h2>
            This results in a final product that’s higher in fat and protein.
            </h2>
          </div>
          <div className="flex  justify-start items-center gap-3 py-2">
            <i class="ri-checkbox-circle-line"></i>
            <h2>Not knowing exactly what you need makes room for impulse buying.</h2>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Useful;
