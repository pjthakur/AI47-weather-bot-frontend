import { Users, Settings, ChevronUp, User2 } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { useContext } from "react"
import { AuthContext } from "@/contexts/AuthContext"
import { Button } from "../ui/button"

// Menu items.
const items = [
    {
        title: "All Users",
        url: "/allUsers",
        icon: Users,
    },
    {
      title: "Bot Settings",
      url: "/account",
      icon: Settings,
    },
]

export function AppSidebar() {
  const authContext= useContext(AuthContext)  
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-between">
            Weather-bot Admin
            <SidebarTrigger className="lg:hidden md:hidden xl:hidden"/>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                    </Link>
                    
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="pb-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> Username
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                    <Link to="/account">
                        <DropdownMenuItem>
                        <span>Account</span>
                        </DropdownMenuItem>
                    </Link>
                  <DropdownMenuItem onClick={authContext?.logout}>
                      <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}
