import React from "react";

const VideoBlock = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] my-0 mx-auto relative">
        <div className="pt-[56.25%]"></div>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/erGJkZZsTds?si=-zcoRvLO4EZSeEEX"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBlock;
