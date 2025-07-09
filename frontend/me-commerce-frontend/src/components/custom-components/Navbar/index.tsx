import React from "react";
import UpperNavbar from "./Segments/upper-navbar";
import LowerNavbar from "./Segments/lower-navbar";
import Logo from "./logo";
import NavMenu from "./nav-menu";
import SearchBar from "../Search/searchbar";
import NavLink from "../Button/nav-link";
import {
  Heart,
  HomeIcon,
  MonitorCog,
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
        <NavMenu>
          {/* //? ovde ce biti pojedinacno komponente jer svaka ima jake funkcionalnosti*/}
          <ShoppingCart className="size-6" />
          <Heart className="size-6" />
          <User className="size-6" />
        </NavMenu>
      </UpperNavbar>
      <LowerNavbar>
        <SidebarTriggerOpen />
        <NavLink
          path="/"
          name="Home"
          icon={<HomeIcon className="justify-center items-center size-5" />}
        />
        <NavLink
          path="/sale"
          name="Sale"
          icon={<TagIcon className="justify-center items-center size-5" />}
        />
        <NavLink
          path="/contact"
          name="Contact"
          icon={<Phone className="justify-center items-center size-5" />}
        />
        <NavLink
          path="/admin"
          name="Admin Panel"
          icon={<MonitorCog className="justify-center items-center size-5" />}
        />
      </LowerNavbar>
    </div>
  );
};

export default Navbar;
