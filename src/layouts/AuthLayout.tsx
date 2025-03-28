import { Link, Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-white h-full p-8 w-full flex flex-col justify-center items-center">
        <Link to="/">
          <img
            alt="Chatrium"
            src="/logo.jpeg"
            className="size-10 object-cover"
          />
        </Link>
        <div className="max-w-xs min-w-xs">
          <Outlet />
        </div>
      </div>
      <img
        alt="Chatrium"
        src="/logo.jpeg"
        className="w-full h-full object-cover hidden md:block"
      />
    </div>
  );
};

export default AuthLayout;
