import Link from "next/link";
import React, { ReactNode } from "react";

interface NavLinkProps {
  path: string;
  name?: string;
  icon?: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  const { path, name, icon } = props;
  return (
    <Link
      className="flex flex-row justify-center items-center 
      border p-2.5 rounded-2xl bg-accent
      hover:bg-background transition delay-75"
      href={path}
    >
      {icon}
      <span className="hidden md:inline ml-1.5">{name}</span>
    </Link>
  );
};

export default NavLink;
