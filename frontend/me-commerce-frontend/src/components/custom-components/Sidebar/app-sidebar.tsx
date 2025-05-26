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
import { getCategories } from "@/lib/functions";
import { TCategory } from "@/types/entities";

export const AppSidebar = async () => {
  const categories: Array<TCategory> = await getCategories();
  return (
    <aside>
      <Sidebar className="fixed">
        <SidebarContent>
          <SidebarTriggerClose />
          <SidebarGroup>
            <SidebarGroupLabel>Shop By Category</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  {categories.map((category, index) => (
                    <SidebarMenuButton
                      key={index}
                      className="cursor-pointer hover:bg-accent text-foreground"
                      asChild
                    >
                      <span>{category.name}</span>
                    </SidebarMenuButton>
                  ))}
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </aside>
  );
};
