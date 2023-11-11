import React from "react";

import { ReactComponent as OdigoLogoBig } from "../img/svg/odigo-logo-big.svg";

const FooterNavCol = ({ NavColTitle, NavColItems }) => {
  return (
    <ul className="text-white leading-[24px] max-sm:mb-[20px] max-sm:w-[50%]">
      <li>
        <h3 className="font-medium text-[18px] mb-[3px]">{NavColTitle}</h3>
      </li>
      {NavColItems.map((item, idx) => {
        return (
          <li key={idx}>
            <a href="#!" className="text-[16px] hover:text-[#d9d9d9] mb-[4px]">
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const PageFooter = () => {
  const FooterNavColData = [
    {
      NavColTitle: "Company",
      NavColItems: ["About", "Team", "Careers", "Privacy Policy"],
    },
    {
      NavColTitle: "Locations",
      NavColItems: ["Tokyo", "Kyoto", "Osaka", "Hokkaido"],
    },
    {
      NavColTitle: "Social Media",
      NavColItems: ["Facebook", "Twitter", "Instagram", "Youtube"],
    },
  ];

  return (
    <footer className="bg-[#0E1D28] py-[119px] max-md:py-[60px]">
      <div className="wrapper">
        <div className="flex flex-wrap">
          <div className="w-[50%] max-sm:w-full max-sm:mb-[30px]">
            <OdigoLogoBig />
          </div>
          <nav className="w-[50%] flex flex-wrap justify-between max-sm:w-full">
            {FooterNavColData.map((navCol, idx) => {
              return (
                <FooterNavCol
                  key={idx}
                  NavColTitle={navCol.NavColTitle}
                  NavColItems={navCol.NavColItems}
                />
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
