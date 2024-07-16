import React from "react";

const AboutUs = () => {
  const bgImg = {
    backgroundImage: "url(/src/assets/Parallax.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh", // Adjust height as needed
  };

  return (
    <>
      <div
        className="flex flex-col justify-center items-center text-center"
        style={bgImg}
      >
        <h1 className="w-4/6 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          eligendi in nulla dignissimos, omnis natus voluptate voluptates
          dolorum tempore aspernatur, quisquam nostrum a odit, at expedita. Cum,
          reiciendis. Aspernatur, unde.
        </h1>

        <h1 className="text-3xl font-bold py-4">Mr. Chef</h1>
      </div>
    </>
  );
};

export default AboutUs;
