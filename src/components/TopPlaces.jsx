import React from "react";

const TopCard = ({}) => {
  return (
    <div>
      <div></div>
    </div>
  );
};

const TopPlaces = () => {
  return (
    <section>
      <div className="wrapper-large">
        <h2 className="relative font-medium text-[35px] leading-[42px] mb-[64px]">
          Today top places to visit
          <span className="absolute left-0 bottom-[-7px] w-[253px] h-[3px] bg-[#006DFE]" />
        </h2>
        <div className="grid grid-cols-3 gap-[57px] mb-[144px]">
          <div>
            <div className="relative">
              <img src="/img/top-place-1.jpg" alt="NAGOYA" />
              <div className=" flex items-center absolute bottom-0 left-0 w-full text-white leading-[24px] px-[25px] py-[16px]">
                <h3 className="text-[18px] mr-[157px]">NAGOYA</h3>
                <div className="text-[16px] flex items-center mr-[14px]">
                  <span className="mr-[4px] pb-[1px]">221</span>
                  <img src="/img/svg/heart-ico.svg" />
                </div>
                <div className="text-[16px] flex items-center">
                  <span className="mr-[9px] pb-[1px]">50</span>
                  <img src="/img/svg/comment-ico.svg" />
                </div>
              </div>
            </div>
            <p>
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over. Being gorgeous with belly side up i could
              pee on this.
            </p>
            <a href="#!">SEE MORE</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPlaces;
