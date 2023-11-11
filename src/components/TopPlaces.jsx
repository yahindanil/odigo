import React from "react";

const TopCard = ({
  TopPlaceImg,
  TopPlaceTitle,
  LikesAmmount,
  CommentsAmmount,
  TopPlaceDescription,
}) => {
  return (
    <div className="flex flex-col col-span-2 max-md:col-span-3 max-sm:col-span-6">
      <div className="relative mb-[45px] max-md:mb-[25px] max-sm:mb-[18px]">
        <img
          src={TopPlaceImg}
          alt={TopPlaceTitle}
          className="w-full h-auto object-cover"
        />
        <div className=" flex justify-between	items-center absolute bottom-0 left-0 w-full text-white leading-[24px] px-[25px] py-[16px] bg-overlay-shadow-2">
          <h3 className="text-[18px] mr-[4px]">{TopPlaceTitle}</h3>
          <div className="flex">
            <div className="text-[16px] flex items-center mr-[14px]">
              <span className="mr-[4px] pb-[1px]">{LikesAmmount}</span>
              <img src="/img/svg/heart-ico.svg" className="mr-[4px]" />
            </div>
            <div className="text-[16px] flex items-center">
              <span className="mr-[9px] pb-[1px]">{CommentsAmmount}</span>
              <img src="/img/svg/comment-ico.svg" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-[16px] leading-[24px] text-[#102746] mb-[31px] max-sm:mb-[18px]">
        {TopPlaceDescription}
      </p>
      <a
        href="#!"
        className="leading-[19.2px] text-white px-[19px] pt-[12px] pb-[11px] bg-[#1B7DFF] hover:bg-[#0e66da] w-[118px] mt-auto max-sm:w-full max-sm:text-center"
      >
        SEE MORE
      </a>
    </div>
  );
};

const TopPlaces = () => {
  const topPacesData = [
    {
      TopPlaceImg: "/img/top-place-1.jpg",
      TopPlaceTitle: "NAGOYA",
      LikesAmmount: "221",
      CommentsAmmount: "50",
      TopPlaceDescription:
        "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.",
    },
    {
      TopPlaceImg: "/img/top-place-2.jpg",
      TopPlaceTitle: "NIIGATA",
      LikesAmmount: "221",
      CommentsAmmount: "50",
      TopPlaceDescription:
        "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.",
    },
    {
      TopPlaceImg: "/img/top-place-3.jpg",
      TopPlaceTitle: "OSAKA",
      LikesAmmount: "221",
      CommentsAmmount: "50",
      TopPlaceDescription:
        "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.",
    },
    {
      TopPlaceImg: "/img/top-place-4.jpg",
      TopPlaceTitle: "SAITAMA",
      LikesAmmount: "221",
      CommentsAmmount: "50",
      TopPlaceDescription:
        "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.",
    },
    {
      TopPlaceImg: "/img/top-place-5.jpg",
      TopPlaceTitle: "UENO",
      LikesAmmount: "221",
      CommentsAmmount: "50",
      TopPlaceDescription:
        "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.",
    },
    {
      TopPlaceImg: "/img/top-place-6.jpg",
      TopPlaceTitle: "SHIBUYA",
      LikesAmmount: "221",
      CommentsAmmount: "50",
      TopPlaceDescription:
        "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.",
    },
  ];

  return (
    <section>
      <div className="wrapper-large">
        <h2 className="relative font-medium text-[35px] leading-[42px] mb-[64px]">
          Today top places to visit
          <span className="absolute left-0 bottom-[-7px] w-[253px] h-[3px] bg-[#006DFE]" />
        </h2>
        <div className="grid grid-cols-6 gap-[57px] max-md:gap-x-[25px] max-md:gap-y-[55px] mb-[144px] max-sm:gap-[40px] max-sm:mb-[70px]">
          {topPacesData.map((topPlace, idx) => {
            return (
              <TopCard
                key={idx}
                TopPlaceImg={topPlace.TopPlaceImg}
                TopPlaceTitle={topPlace.TopPlaceTitle}
                LikesAmmount={topPlace.LikesAmmount}
                CommentsAmmount={topPlace.CommentsAmmount}
                TopPlaceDescription={topPlace.TopPlaceDescription}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopPlaces;
