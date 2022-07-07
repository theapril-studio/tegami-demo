import React from "react";
import { ReactComponent as TegamiIcon } from "../../icon.svg";
// import { ReactComponent as TegamiIcon } from "../../../public/asset/icon.svg";
import { MenuList } from "./MenuList";
import {
  NavBarResponsive,
  NavHeader,
  NavHeaderIcon,
  NavHeaderText,
  NavMenu,
  NavMenuIcon,
  NavMenuText,
} from "./NavBarStyle";

const NavBar = () => {
  return (
    <div className={NavBarResponsive}>
      <div className="bg-tegami-100/90 backdrop-blur-sm items-center fixed bottom-0 w-full h-20 sm:sticky sm:top-0 ">
        <NavBarHeader />
        <NavBarMenu />
      </div>
    </div>
  );
};

export default NavBar;

const NavBarHeader = () => {
  return (
    <div className={NavHeader}>
      <div className={NavHeaderIcon}>
        <TegamiIcon className="w-full h-full" />
      </div>
      <div className={NavHeaderText}>
        <h1 className="whitespace-nowrap w-full text-3xl text-tegami-800">
          The Tegami
        </h1>
      </div>
    </div>
  );
};

const NavBarMenu = () => {
  return (
    <div className={NavMenu}>
      {MenuList.map((item, index) => {
        return (
          <MenuItem key={index} icon={item.icon}>
            {item.name}
          </MenuItem>
        );
      })}
    </div>
  );
};

const MenuItem = ({ children, icon }) => {
  return (
    <div className={NavMenuIcon}>
      <div className="w-8 h-8 flex justifytegaminter items-center ease-in-out duration-300">
        {icon}
      </div>
      <div className={NavMenuText}>
        <p className="whitespace-nowrap w-full text-xl ">{children}</p>
      </div>
    </div>
  );
};
