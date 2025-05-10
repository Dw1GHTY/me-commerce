import React, { ReactNode } from "react";

interface UpperNavbarProps {
  children: Array<ReactNode>;
}

const UpperNavbar: React.FC<UpperNavbarProps> = (props) => {
  const { children } = props;
  return (
    <div
      className="
    flex 
    flex-col md:flex-row
    justify-between
    px-4 py-1 w-full
    bg-background text-foreground 
    border-b-2 border-b-accent"
    >
      {children.map((component, index) => {
        return (
          <div key={index} className="flex justify-center items-center">
            {component}
          </div>
        );
      })}
    </div>
  );
};

export default UpperNavbar;
