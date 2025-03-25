import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import items from "./items";
import { Link, useLocation } from "react-router";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const AppSidebar = () => {
  const { pathname } = useLocation();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img
              alt="Chatrium"
              src="/logo.jpeg"
              className="h-12 rounded-full"
            />
          </Link>
          <SidebarTrigger className="ml-auto" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <Collapsible
                  defaultOpen={item.items?.some((subItem) =>
                    pathname.includes(subItem.url)
                  )}
                  key={item.title}
                  className={`${item.title}/collapsible`}
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        className={cn({
                          "bg-primary-200 text-primary-950 hover:bg-primary-100":
                            item.items?.some((subItem) =>
                              pathname.includes(subItem.url)
                            ),
                        })}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <Link to={subItem.url}>
                              <SidebarMenuButton
                                className={cn({
                                  "bg-primary-200 text-primary-950 hover:bg-primary-100":
                                    pathname.includes(subItem.url),
                                })}
                              >
                                <subItem.icon />
                                <span>{subItem.title}</span>
                              </SidebarMenuButton>
                            </Link>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
