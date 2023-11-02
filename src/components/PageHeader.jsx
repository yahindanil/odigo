import React from "react";

import { ReactComponent as OdigoLogo } from "../img/svg/odigo-logo.svg";

const PageHeader = () => {
  return (
    <div className="fixed top-0 left-0 w-full">
      <div className="wrapper pt-[56px]">
        <div className="flex flex-wrap items-end justify-between">
          <div>
            <a href="/">
              <OdigoLogo />
            </a>
          </div>

          <nav>
            <ul className="flex flex-wrap text-white text-[18px] leading-[24px]">
              <li className="mr-[82px] hover:opacity-75">
                <a href="#!">Articles</a>
              </li>
              <li className="mr-[82px] hover:opacity-75">
                <a href="#!">Locations</a>
              </li>
              <li className="mr-[82px] hover:opacity-75">
                <a href="#!">Videos</a>
              </li>
              <li>
                <a href="#!">Sign in</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
