import React, { useState } from "react";

const Hero = () => {
  const images = [
    "/src/assets/main-banner-1.jpg",
    "/src/assets/main-banner-2.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (

    
    
    <div className="slider relative top-0 w-full h-screen overflow-x-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0  
                ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}

      <div className="Overlay absolute inset-0 bg-zinc-950 bg-opacity-30 flex justify-center items-center">
        <div className="text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
            Traditional Dishes
          </h1>
          <p className="text-lg md:text-2xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit.laborum recusandae eos corrupti quasi molestiae!</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
