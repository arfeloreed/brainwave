import { useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { brainwave } from "../assets";
import { navigation } from "../variables";
import Button from "./ui/Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
      enablePageScroll();
    } else {
      setIsNavOpen(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!isNavOpen) return;

    setIsNavOpen(false);
    enablePageScroll();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm 
                  ${isNavOpen ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>

        <nav
          className={`${isNavOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"} fixed top-[4.8rem] left-0 right-0 bottom-0 
                  bg-n-8 lg:opacity-100 lg:static flex lg:translate-y-0 lg:pointer-events-auto lg:mx-auto lg:bg-transparent transition-all duration-500 ease-in-out`}
        >
          <div
            className="relative z-2 flex flex-col items-center justify-center m-auto
            lg:flex-row"
          >
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 
                transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} 
                px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNav}>
          <MenuSvg openNavigation={isNavOpen} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
