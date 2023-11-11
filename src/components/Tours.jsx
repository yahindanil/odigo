import React from "react";

import Arrow from "../img/svg/arrow.svg";

const Tours = () => {
  return (
    <div className="mb-[139px] max-sm:mb-[45px]">
      <div className="wrapper-large">
        <div className="grid items-center grid-cols-2 gap-x-[108px] mb-[77px] max-lg:gap-x-[35px] max-sm:mb-[35px]">
          <div className="max-sm:col-span-2 max-sm:mb-[12px]">
            <img src="/img/tour-1.jpg" alt="Tottori img"></img>
          </div>
          <div className="pl-[47px] max-lg:pl-0 max-sm:col-span-2">
            <h3 className="text-[30px] leading-[40px] text-[#102746] font-medium mb-[85px] max-lg:mb-[15px]">
              Prefecture in Focus: Tottori
            </h3>
            <p className="text-[16px] leading-[24px] text-[#102746] mb-[58px] max-lg:mb-[15px]">
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over. Being gorgeous with belly side up i could
              pee on this if i had the energy but under the bed, for attack the
              child, open the door,{" "}
            </p>
            <a href="#!" className="flex">
              <p className="text-[16px] leading-[24px] text-[#006DFE] mr-[26px]">
                VIEW PREFECTURE
              </p>
              <img src={Arrow} alt="arrow" />
            </a>
          </div>
        </div>
        <div className="grid items-center grid-cols-2 gap-x-[108px] mb-[77px] max-lg:gap-x-[35px] max-sm:mb-[25px]">
          <div className="pl-[47px] max-lg:pl-0 max-sm:col-span-2">
            <h3 className="text-[30px] leading-[40px] text-[#102746] font-medium mb-[85px] max-lg:mb-[15px]">
              Featured Neighborhood: Kyoto’s Arashiyama
            </h3>
            <p className="text-[16px] leading-[24px] text-[#102746] mb-[58px] max-lg:mb-[15px]">
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over. Being gorgeous with belly side up i could
              pee on this if i had the energy but under the bed, for attack the
              child, open the door,{" "}
            </p>
            <a href="#!" className="flex">
              <p className="text-[16px] leading-[24px] text-[#006DFE] mr-[26px]">
                VIEW NEIGHBORHOOD
              </p>
              <img src={Arrow} alt="arrow" />
            </a>
          </div>
          <div className="max-sm:col-span-2 max-sm:mb-[12px] max-sm:row-span-full">
            <img src="/img/tour-2.jpg" alt="Kyoto’s Arashiyama img"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
