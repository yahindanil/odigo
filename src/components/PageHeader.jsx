import React, { useState, useEffect } from "react";

import { ReactComponent as OdigoLogo } from "../img/svg/odigo-logo.svg";

const PageHeader = () => {
  // Add backgrount for nav menu when scrolled
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Nav menu open when burger is clicked on
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent burger nav menu to appear when user is resizing the browser
  const [transitionsEnabled, setTransitionsEnabled] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setTransitionsEnabled(false); // Disable transitions
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
      setTimeout(() => {
        setTransitionsEnabled(true); // Re-enable transitions after a brief delay
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-20 transition duration-200 ease-linear pb-[20px] ${
        scrolled ? "bg-[#0E1D28]" : ""
      } `}
    >
      <div className="wrapper pt-[56px]">
        <div className="flex flex-wrap items-end justify-between">
          <div>
            <a href="/">
              <OdigoLogo />
            </a>
          </div>

          <nav
            className={`max-md:fixed max-md:w-full max-md:h-full max-md:top-0 max-md:left-0 max-md:bg-black max-md:z-10 max-md:p-[75px] ${
              menuOpen ? "max-md:translate-x-0" : "max-md:translate-x-[100%]"
            } ${
              transitionsEnabled
                ? "transition duration-300 linear transition duration-200 ease-linear"
                : ""
            }`}
          >
            <ul className="flex flex-wrap text-white text-[18px] leading-[24px]">
              <li className="mr-[82px] hover:opacity-75 max-md:w-full max-md:mr-0 max-md:mb-[30px]">
                <a
                  href="#!"
                  className="max-md:text-[42px] max-md:leading-[48px]"
                >
                  Articles
                </a>
              </li>
              <li className="mr-[82px] hover:opacity-75 max-md:w-full max-md:mr-0 max-md:mb-[30px]">
                <a
                  href="#!"
                  className="max-md:text-[42px] max-md:leading-[48px]"
                >
                  Locations
                </a>
              </li>
              <li className="mr-[82px] hover:opacity-75 max-md:w-full max-md:mr-0 max-md:mb-[30px]">
                <a
                  href="#!"
                  className="max-md:text-[42px] max-md:leading-[48px]"
                >
                  Videos
                </a>
              </li>
              <li className="hover:opacity-75 max-md:w-full max-md:mr-0">
                <a
                  href="#!"
                  className="max-md:text-[42px] max-md:leading-[48px]"
                >
                  Sign in
                </a>
              </li>
            </ul>

            {/* Burger X-mark */}
            <div
              className="max-md:w-[40px] max-md:h-[40px] max-md:absolute max-md:top-[50px] max-md:right-[20px] max-md:z-11"
              onClick={() => setMenuOpen(false)}
            >
              <span className="max-md:block max-md:w-full max-md:h-[2px] max-md:bg-white max-md:absolute max-md:top-[50%] max-md:translate-y-[-50%] max-md:rotate-45"></span>
              <span className="max-md:block max-md:w-full max-md:h-[2px] max-md:bg-white max-md:absolute max-md:top-[50%] max-md:translate-y-[-50%] max-md:rotate-[-45deg]"></span>
            </div>
          </nav>

          {/* Burger */}
          <div
            className="w-[40px] h-[28px] relative hidden max-md:block"
            onClick={() => setMenuOpen(true)}
          >
            <span className="block w-full h-[2px] bg-white absolute top-0"></span>
            <span className="block w-full h-[2px] bg-white absolute top-[50%] translate-y-[-50%]"></span>
            <span className="block w-full h-[2px] bg-white absolute bottom-0"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
