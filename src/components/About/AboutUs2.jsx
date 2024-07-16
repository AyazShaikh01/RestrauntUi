import React from "react";

const AboutUs2 = () => {
  return (
    <div className="bg-customPalette-navBG text-white p-2">
      <div className="px-4 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="text-center w-full md:w-1/2 h-auto md:h-96 flex flex-col justify-center items-center bg-customPalette-Bg2 mb-4 md:mb-0">
            <h1 className="text-2xl font-semibold px-4">
              THE BEST <br />
              SPECIAL FOOD
            </h1>
            <p className="w-full pb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem eaque.
            </p>
            <button className="bg-yellow-700 px-3 py-1 my-1 text-xl">
              View More
            </button>
          </div>
          <img
            src="/src/assets/Special-Food.jpg"
            alt="Food"
            className="w-full md:w-1/2 h-auto md:h-96 object-cover rounded-md shadow-lg mx-2 zoom-on-hover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs2;
