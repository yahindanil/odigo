import React from "react";

import Arrow from "../img/svg/arrow.svg";

const TourCard = ({
  TourImg,
  TourTitle,
  TourDescription,
  flexFlow,
  descriptionMargin,
  linkText,
}) => (
  <div
    className={`flex ${flexFlow} items-center mb-[77px] justify-between h-[354px]`}
  >
    <div className="min-w-[480px]">
      <img
        src={TourImg}
        alt={`${TourTitle} image`}
        className="object-contain"
      />
    </div>
    <div className={`max-w-[519px] ${descriptionMargin}`}>
      <h3 className="text-[30px] leading-[40px] text-[#102746] font-medium mb-[85px]">
        {TourTitle}
      </h3>
      <p className="text-[16px] leading-[24px] text-[#102746] mb-[58px]">
        {TourDescription}
      </p>
      <a href="#!" className="flex">
        <p className="text-[16px] leading-[24px] text-[#006DFE] mr-[26px]">
          {linkText}
        </p>
        <img src={Arrow} alt="arrow" />
      </a>
    </div>
  </div>
);

const Tours = () => {
  const toursData = [
    {
      TourImg: "/img/tour-1.jpg",
      TourTitle: "Prefecture in Focus: Tottori",
      TourDescription:
        "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door, ",
      linkText: "VIEW PREFECTURE",
    },
    {
      TourImg: "/img/tour-2.jpg",
      TourTitle: "Featured Neighborhood: Kyoto’s Arashiyama",
      TourDescription:
        "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door, ",
      linkText: "VIEW NEIGHBORHOOD",
    },
  ];

  return (
    <div className="mb-[139px]">
      <div className="wrapper-large">
        {toursData.map((tour, idx) => {
          const flexFlow = idx % 2 ? "flex-row-reverse" : "";
          const descriptionMargin = idx % 2 ? "ml-[47px]" : " mr-[47px]";

          return (
            <TourCard
              key={idx}
              TourImg={tour.TourImg}
              TourTitle={tour.TourTitle}
              TourDescription={tour.TourDescription}
              linkText={tour.linkText}
              flexFlow={flexFlow}
              descriptionMargin={descriptionMargin}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tours;
