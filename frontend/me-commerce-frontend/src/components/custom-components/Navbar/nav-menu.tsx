import React, { ReactNode } from "react";
import { ModeToggle } from "../Theme/mode-toggle";

interface NavMenuProps {
  menuItems: Array<ReactNode>;
}

const NavMenu: React.FC<NavMenuProps> = (props) => {
  const { menuItems } = props;
  return (
    <div className="flex flex-row size-fit">
      {menuItems.map((item, index) => {
        return (
          <div
            className="
            flex justify-center items-center flex-1
            size-fit p-0.5 m-1.5 
            cursor-pointer hover:ring-1 transition delay-75 
            rounded-lg"
            key={index}
          >
            {item}
          </div>
        );
      })}
      <ModeToggle />
    </div>
  );
};

export default NavMenu;
