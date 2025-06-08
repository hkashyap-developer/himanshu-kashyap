import * as React from "react";
import { GalleryVerticalEnd } from "lucide-react";

import Link from "next/link";

import { NavMain } from "@/components/nav-main";
import { SidebarOptInForm } from "@/components/sidebar-opt-in-form";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Global Settings",
      url: "#",
      items: [
        {
          title: "Business Details",
          url: "#",
        },
        {
          title: "Project Structure",
          url: "#",
        },
      ],
    },
    {
      title: "Pages",
      url: "#",
      items: [
        {
          title: "Home",
          url: "#",
        },
        {
          title: "Landing Page",
          url: "#",
          isActive: true,
        },
        {
          title: "About Us",
          url: "#",
          isActive: true,
        },
        {
          title: "Our Services",
          url: "#",
          isActive: true,
        },
        {
          title: "Contact",
          url: "#",
          isActive: true,
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      items: [
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Our Vision",
          url: "#",
        },
      ],
    },
    {
      title: "Account",
      url: "#",
      items: [
        {
          title: "Profile",
          url: "#",
        },
        {
          title: "Logout",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-bold">Build X</span>
                  <span className="">v1.0.0</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className="p-1">
          <SidebarOptInForm />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
