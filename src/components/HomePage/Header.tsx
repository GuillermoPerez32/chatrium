import AppRoutes from "@/constants/appRoutes";
import { useState } from "react";
import { Link } from "react-router";
import { Menu } from "lucide-react";
import NavBar from "./NavBar";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const { user, setUser } = useAuthStore();

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to={AppRoutes.HOME} className="-m-1.5 p-1.5">
            <span className="sr-only">Chatrium</span>
            <img className="h-12 w-auto rounded-full" src="/logo.jpeg" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            onClick={() => setNavBarOpen(true)}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
          >
            <span className="sr-only">Open main menu</span>
            <Menu />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to={AppRoutes.HOME}
            className="text-sm/6 font-semibold text-muted-foreground"
          >
            Product
          </Link>
          <Link
            to={AppRoutes.HOME}
            className="text-sm/6 font-semibold text-muted-foreground"
          >
            Features
          </Link>
          <Link
            to={AppRoutes.HOME}
            className="text-sm/6 font-semibold text-muted-foreground"
          >
            Marketplace
          </Link>
          <Link
            to={AppRoutes.HOME}
            className="text-sm/6 font-semibold text-muted-foreground"
          >
            Company
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <ThemeToggle />
          {user ? (
            <Button
              onClick={() => setUser(undefined)}
              variant="ghost"
              className="text-sm/6 font-semibold text-muted-foreground"
            >
              Log out
            </Button>
          ) : (
            <Link
              to={AppRoutes.LOGIN}
              className="text-sm/6 font-semibold text-muted-foreground"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
      <NavBar open={navBarOpen} onClose={() => setNavBarOpen(false)} />
    </header>
  );
};

export default Header;
