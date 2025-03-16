import AppRoutes from "@/constants/appRoutes";
import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router";
import { CircleX, Menu } from "lucide-react";

const Header = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to={AppRoutes.HOME} className="-m-1.5 p-1.5">
            <span className="sr-only">Chatrium</span>
            <img
              className="h-8 w-auto"
              src="https://placehold.co/600x400"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Menu onClick={() => setNavBarOpen(true)} />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to={AppRoutes.HOME}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Product
          </Link>
          <Link
            to={AppRoutes.HOME}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Features
          </Link>
          <Link
            to={AppRoutes.HOME}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Marketplace
          </Link>
          <Link
            to={AppRoutes.HOME}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Company
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to={AppRoutes.LOGIN}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <div
        className={clsx({
          hidden: !navBarOpen,
          "fixed inset-0 z-50": true,
        })}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 z-50"></div>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to={AppRoutes.HOME} className="-m-1.5 p-1.5">
              <span className="sr-only">Chatrium</span>
              <img
                className="h-8 w-auto"
                src="https://placehold.co/600x400"
                alt=""
              />
            </Link>
            <button
              onClick={() => setNavBarOpen(false)}
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <CircleX />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to={AppRoutes.HOME}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Product
                </Link>
                <Link
                  to={AppRoutes.HOME}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Features
                </Link>
                <Link
                  to={AppRoutes.HOME}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </Link>
                <Link
                  to={AppRoutes.HOME}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Company
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to={AppRoutes.LOGIN}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
