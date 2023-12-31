import React from "react";

import Arrow from "../img/svg/arrow.svg";

const PlaceCard = ({ PlaceImg, PlaceName, span, height }) => {
  return (
    <figure
      className={`${span} relative after:block after:content-[''] after:bg-overlay-shadow after:h-full after:w-full after:absolute after:top-0 after:left-0  max-md:col-span-6`}
    >
      <img
        src={PlaceImg}
        alt={PlaceName}
        className={`${height} w-full object-cover max-sm:h-[230px]`}
      />
      <figcaption className="font-bold text-[50px] leading-[60px] text-white bottom-[27px] left-[29px] absolute z-10">
        {PlaceName}
      </figcaption>
    </figure>
  );
};

const Places = () => {
  const placesData = [
    {
      PlaceImg: "/odigo/img/place-1.jpg",
      PlaceName: "Mount Fuji",
    },
    {
      PlaceImg: "/odigo/img/place-2.jpg",
      PlaceName: "Kyoto",
    },
    {
      PlaceImg: "/odigo/img/place-3.jpg",
      PlaceName: "Tokyo",
    },
    {
      PlaceImg: "/odigo/img/place-4.jpg",
      PlaceName: "Niigata",
    },
    {
      PlaceImg: "/odigo/img/place-5.jpg",
      PlaceName: "Sapporo",
    },
  ];

  return (
    <section className="max-sm:mb-[60px]">
      <div className="wrapper-large">
        <div className="flex flex-wrap items-center justify-between mb-[46px] max-sm:mb-[25px]">
          <h2 className="relative  font-medium text-[35px] leading-[42px] mr-[15px] max-sm:mb-[25px]">
            Get inspired for your next trip
            <span className="absolute left-0 bottom-[-7px] w-[253px] h-[3px] bg-[#006DFE]" />
          </h2>
          <a
            href="#!"
            className="font-normal text-[16px] leading[24px] text-[#006DFE] flex"
          >
            <p className="mr-[26px]">VIEW ALL</p>
            <img src={Arrow} alt="arrow" />
          </a>
        </div>

        <div className="grid grid-cols-6 gap-[10px] mb-[131px] max-sm:mb-[20px]">
          {placesData.map((place, idx) => {
            const span = idx < 2 ? "col-span-3" : "col-span-2";
            const height = idx < 2 ? "h-[354px]" : "h-[283px]";

            return (
              <PlaceCard
                key={idx}
                PlaceName={place.PlaceName}
                PlaceImg={place.PlaceImg}
                span={span}
                height={height}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Places;
