import React from "react";

const TopCard = ({
  TopPlaceImg,
  TopPlaceTitle,
  LikesAmmount,
  CommentsAmmount,
  TopPlaceDescription,
}) => {
  return (
    <div className="flex flex-col">
      <div className="relative mb-[45px]">
        <img src={TopPlaceImg} alt={TopPlaceTitle} />
        <div className=" flex items-center absolute bottom-0 left-0 w-full text-white leading-[24px] px-[25px] py-[16px]">
          <h3 className="text-[18px] mr-[157px]">{TopPlaceTitle}</h3>
          <div className="text-[16px] flex items-center mr-[14px]">
            <span className="mr-[4px] pb-[1px]">{LikesAmmount}</span>
            <img src="/img/svg/heart-ico.svg" />
          </div>
          <div className="text-[16px] flex items-center">
            <span className="mr-[9px] pb-[1px]">{CommentsAmmount}</span>
            <img src="/img/svg/comment-ico.svg" />
          </div>
        </div>
      </div>
      <p className="text-[16px] leading-[24px] text-[#102746] mb-[31px]">
        {TopPlaceDescription}
      </p>
      <a
        href="#!"
        className="leading-[19.2px] text-white px-[19px] pt-[12px] pb-[11px] bg-[#1B7DFF] hover:bg-[#0e66da] w-[118px] mt-auto"
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
        <div className="grid grid-cols-3 gap-[57px] mb-[144px]">
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
