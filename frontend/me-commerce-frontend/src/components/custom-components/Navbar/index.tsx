import React from "react";
import UpperNavbar from "./Segments/upper-navbar";
import LowerNavbar from "./Segments/lower-navbar";
import Logo from "./logo";
import NavMenu from "./nav-menu";
import SearchBar from "../Search/searchbar-gpt";
import NavLink from "../Button/nav-link";
import {
  Heart,
  HomeIcon,
  Phone,
  ShoppingCart,
  TagIcon,
  User,
} from "lucide-react";
import { SidebarTriggerOpen } from "../Sidebar/sidebar-trigger";

const Navbar = () => {
  return (
    <div className="flex-col min-w-screen">
      <UpperNavbar>
        <Logo imageSrc="/logo.jpg" imageAlt="Logo" />
        <SearchBar />
        <NavMenu
          menuItems={[
            //? ovde ce biti pojedinacno komponente jer svaka ima jake funkcionalnosti
            <ShoppingCart className="size-6" />,
            <Heart className="size-6" />,
            <User className="size-6" />,
          ]}
        />
      </UpperNavbar>
      <LowerNavbar>
        <SidebarTriggerOpen />
        <NavLink path="/" name="Home" icon={<HomeIcon />} />
        <NavLink path="/sale" name="Best Deals" icon={<TagIcon />} />
        <NavLink path="/contact" name="Contact" icon={<Phone />} />
      </LowerNavbar>
    </div>
  );
};

export default Navbar;
