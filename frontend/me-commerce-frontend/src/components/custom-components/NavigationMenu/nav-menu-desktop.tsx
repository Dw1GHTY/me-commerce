import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MenuIcon } from "lucide-react";

const CategoriesNavMenu = () => {
  return (
    <div className="flex justify-center items-center p-0.5">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="size-fit border">
              <MenuIcon width={25} height={25} />
              <span className="mx-0.5">All</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>IT</NavigationMenuLink>
              <NavigationMenu>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Computers</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Prebuilts</NavigationMenuLink>
                    <NavigationMenuLink>CPU</NavigationMenuLink>
                    <NavigationMenuLink>Memory</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
              <NavigationMenuLink>DIY</NavigationMenuLink>
              <NavigationMenuLink>Clothes</NavigationMenuLink>
              <NavigationMenuLink>Accesories</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default CategoriesNavMenu;
