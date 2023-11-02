import React from "react";

import IntroBg from "../img/intro-bg.jpg";
import { ReactComponent as Circle } from "../img/svg/circle.svg";

const DiscoverAmazingPlaces = () => {
  return (
    <section
      style={{ backgroundImage: `url(${IntroBg})` }}
      className="min-h-screen bg-no-repeat bg-cover bg-center pt-[263px]"
    >
      <div className="wrapper">
        <h1 className="text-white text-[50px] leading-[60px] max-w-[619px] mb-[22px]">
          Discover Amazing places in Japan
        </h1>

        <p className="text-white max-w-[546px] text-[16px] leading-[24px] mb-[59px]">
          Jump off balcony, onto stranger's head. Chase ball of string hide when
          guests come over. Being gorgeous with belly side up i could pee on
          this if i had the energy but under the bed, for attack the child, open
          the door,
        </p>

        <form>
          <fieldset className="pb-[300px]">
            <p className="flex flex-wrap">
              <div className="relative mr-[60px]">
                <Circle className="absolute top-0 left-0 w-[20px] h-[20px] z-0" />
                <input
                  type="text"
                  placeholder="What would you like to do?"
                  className="relative z-10 bg-transparent border-b-2 border-[#BFC0C5] border-solid w-[297px] pl-[43px] text-white text-[18px] leading-[24px] pb-[22px] placeholder:text-white placeholder:text-[18px] placeholder:leading-[24px] focus:outline-0"
                ></input>
              </div>

              <div className="relative mr-[60px]">
                <Circle className="absolute top-0 left-0 w-[20px] h-[20px] z-0" />
                <input
                  type="text"
                  placeholder="Where would you like to go?"
                  className="relative z-10 bg-transparent border-b-2 border-[#BFC0C5] border-solid w-[297px] pl-[43px] text-white text-[18px] leading-[24px] pb-[22px] placeholder:text-white placeholder:text-[18px] placeholder:leading-[24px] focus:outline-0"
                ></input>
              </div>

              <button
                type="submit"
                className="text-white text-[24px] px-[39px] pt-[15px] pb-[14px] bg-[#1B7DFF] hover:bg-[#0e66da]"
              >
                SEARCH
              </button>
            </p>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default DiscoverAmazingPlaces;
