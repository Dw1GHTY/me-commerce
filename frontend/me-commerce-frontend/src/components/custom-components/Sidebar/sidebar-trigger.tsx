"use client";

import React from "react";
import { useSidebar } from "@/components/ui/sidebar";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SidebarTriggerOpen = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      className="
      flex flex-row 
      border p-2.5 rounded-2xl 
      text-foreground cursor-pointer bg-accent hover:bg-background transition delay-75
      "
      onClick={toggleSidebar}
    >
      <Menu />
      <span className="hidden md:inline">All</span>
    </Button>
  );
};

export const SidebarTriggerClose = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      className="
      flex flex-row 
      border p-2.5 rounded-2xl 
      text-foreground cursor-pointer bg-accent hover:bg-background transition delay-75
      "
      onClick={toggleSidebar}
    >
      <X />
    </Button>
  );
};
