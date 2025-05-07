import React, { ReactNode } from "react";

interface LowerNavbarProps {
  children: Array<ReactNode>;
}

const LowerNavbar: React.FC<LowerNavbarProps> = (props) => {
  const { children } = props;

  return (
    <div
      className="
    flex flex-row w-full 
    my-1 "
    >
      {children.map((component, index) => {
        return (
          <div className="flex size-fit mx-2" key={index}>
            {component}
          </div>
        );
      })}
    </div>
  );
};

export default LowerNavbar;
