import AppRoutes from "@/constants/appRoutes";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer>
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-muted-foreground sm:text-center">
          © 2025{" "}
          <Link to={AppRoutes.HOME} className="hover:underline">
            Chatrium
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-muted-foreground sm:mt-0">
          <li>
            <Link to={AppRoutes.HOME} className="hover:underline me-4 md:me-6">
              About
            </Link>
          </li>
          <li>
            <Link to={AppRoutes.HOME} className="hover:underline me-4 md:me-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to={AppRoutes.HOME} className="hover:underline me-4 md:me-6">
              Licensing
            </Link>
          </li>
          <li>
            <Link to={AppRoutes.HOME} className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
