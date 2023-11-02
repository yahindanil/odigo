import React from "react";

import Temple from "../img/temple.png";
import Person from "../img/person.png";
import Building from "../img/building.png";
import Arrow from "../img/svg/arrow.svg";

const BenefitCard = ({ Icon, title, description }) => (
  <div className="col-span-1 mb-[112px]">
    <div className="mb-[37px] max-w-[66px]">
      <img src={Icon} alt="" />
    </div>
    <h3 className="text-[18px] leading-[24px] font-medium mb-[26px]">
      {title}
    </h3>
    <p className="text-[16px] leading-[24px] font-normal mb-[39px]">
      {description}
    </p>
    <a
      className="text-[16px] leading-[24px] font-normal text-[#006DFE] flex"
      href="#!"
    >
      <p className="mr-[26px]">LEARN MORE</p>
      <img src={Arrow} alt="arrow" />
    </a>
  </div>
);

const Benefits = () => {
  const benefitsData = [
    {
      Icon: Temple,
      title: "Welcome to Odigo!",
      description:
        "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.",
    },
    {
      Icon: Person,
      title: "Your Personal Japan Guide",
      description:
        "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.",
    },
    {
      Icon: Building,
      title: "Promoting Local Businesses",
      description:
        "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.",
    },
  ];

  return (
    <div>
      <section>
        <div className="relative max-w-[1262px] bg-white mx-auto my-0 mb-[131px] shadow-[0_2px_20px_0_rgba(21,24,36,0.1599)]">
          <h2 className="w-[100%] absolute top-[1px] left-0 translate-y-[-100%] text-[35px] leading-[42px] px-[100px] pt-[93px] pb-[88px] bg-white">
            Benefits of Odigo
          </h2>

          <div className="grid grid-cols-3 gap-x-[55px] px-[100px] py-[0]">
            {benefitsData.map((benefit, idx) => (
              <BenefitCard
                key={idx}
                Icon={benefit.Icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
