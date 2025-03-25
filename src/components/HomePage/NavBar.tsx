import AppRoutes from "@/constants/appRoutes";
import { CircleX } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/stores";

interface Props {
  open: boolean;
  onClose: () => void;
}

const NavBar = ({ open, onClose }: Props) => {
  const { user, setUser } = useAuthStore();

  return (
    <div
      className={cn({
        hidden: !open,
        "fixed inset-0 z-50": true,
      })}
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 z-50"></div>
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary-300 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link to={AppRoutes.HOME} className="-m-1.5 p-1.5">
            <span className="sr-only">Chatrium</span>
            <img className="h-8 w-auto" src="/logo.jpeg" alt="" />
          </Link>
          <Button
            variant="ghost"
            onClick={onClose}
            className="-m-2.5 rounded-md p-2.5 text-gray-900"
          >
            <span className="sr-only">Close menu</span>
            <CircleX className="cursor-pointer" />
          </Button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Link
                to={AppRoutes.HOME}
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-200"
              >
                Product
              </Link>
              <Link
                to={AppRoutes.HOME}
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-200"
              >
                Features
              </Link>
              <Link
                to={AppRoutes.HOME}
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-200"
              >
                Marketplace
              </Link>
              <Link
                to={AppRoutes.HOME}
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-200"
              >
                Company
              </Link>
            </div>
            <div className="py-6">
              <div className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-200">
                <Link
                  onClick={(e) => {
                    if (!user) return;
                    e.preventDefault();
                    setUser(undefined);
                  }}
                  to={AppRoutes.LOGIN}
                >
                  {user ? "Log out" : "Log in"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
