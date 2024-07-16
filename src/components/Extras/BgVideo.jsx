import React from "react";

const BgVideo = () => {
  return (
    <>
      {/* <div className="relative bg-black">
        <div >
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-screen h-screen"
          >
            <source src="/src/assets/video_slider.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <h1 className="text-7xl font-bold tracking-widest text-center px-4">
              BonFire Cooking
            </h1>
          </div>
        </div>
      </div> */}

      <div className="container">
        <div className="text"></div>
        <div className="video">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 "
          >
            <source src="/src/assets/video_slider.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default BgVideo;
