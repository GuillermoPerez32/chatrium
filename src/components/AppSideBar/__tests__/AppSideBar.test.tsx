import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import AppSidebar from "../AppSideBar";
import { SidebarProvider } from "@/components/ui/sidebar";

// Mock useSidebar hook
vi.mock("@/components/ui/sidebar", async () => {
  const actual = await vi.importActual("@/components/ui/sidebar");
  return {
    ...actual,
    useSidebar: () => ({
      toggleSidebar: vi.fn(),
      open: true,
    }),
  };
});

describe("AppSidebar", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders sidebar component", () => {
    render(
      <MemoryRouter>
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </MemoryRouter>
    );

    expect(screen.getByAltText("Chatrium")).toBeInTheDocument();
  });

  it("renders all main sidebar menu items", () => {
    render(
      <MemoryRouter>
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </MemoryRouter>
    );

    const titles = [
      "Dashboard",
      "LeaderBoard",
      "Inbox",
      "Contacts",
      "Settings",
    ];

    for (const title of titles) {
      expect(screen.getByText(title)).toBeInTheDocument();
    }
  });
});
