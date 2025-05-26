import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SidebarTriggerClose } from "./sidebar-trigger";
import { TCategory } from "@/types/entities";
import { getCategories } from "@/lib/functions";

export const AppSidebar = async () => {
  return (
    <aside>
      <Sidebar className="fixed">
        <SidebarContent>
          <SidebarTriggerClose />
          <SidebarGroup>
            <SidebarGroupLabel>Shop By Category</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {/* {categories.map((category) => (
                  <SidebarMenuItem key={category.id}>
                    <SidebarMenuButton
                      className="cursor-pointer hover:bg-accent text-foreground"
                      asChild
                    >
                      <span>{category.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))} */}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </aside>
  );
};
