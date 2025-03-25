import { Link, Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="flex h-screen flex-1 flex-col justify-center p-8">
      <div className="bg-white max-h-11/12 overflow-y-scroll p-8 shadow w-full self-center rounded-xl sm:w-lg">
        <Link to="/">
          <img
            alt="Chatrium"
            src="/logo.jpeg"
            className="mx-auto h-12 w-auto rounded-full"
          />
        </Link>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
