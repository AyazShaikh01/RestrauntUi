import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-customPalette-navBG">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h3 className="text-5xl font-semi text-white">About Us</h3>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 mt-10">
          {/* Left Image */}
          <div className="md:w-1/3 relative">
            <img
              className="rounded-lg shadow-md w-full h-full object-cover zoom-on-hover"
              src="src/assets/About-Us-01.jpg"
              alt=""
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/3 bg-customPalette-Bg2 rounded-lg shadow-md flex flex-col justify-center p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Taste perception
            </h2>
            <h1>TRADITIONAL & MODERN</h1>
            <p className="text-white my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis libero sit amet dolor vestibulum, non varius felis
              consectetur.
            </p>
            <div>
              <button className="bg-orange-400 w-fit px-5 py-2 text-center">
                Read More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/3 relative">
            <img
              className="rounded-lg shadow-md w-full h-full object-cover zoom-on-hover"
              src="src/assets/About-Us-02.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
