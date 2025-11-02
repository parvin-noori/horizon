import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router";
import LoginForm from "./loginForm";

export default function Login() {
  return (
    <div className="lg:h-svh flex flex-col lg:gap-y-0 gap-y-10 md:justify-between p-5 max-w-lg">
      <Link to="/" className="text-gray-400 text-sm flex items-center gap-x-2 group">
        <IoChevronBackOutline className="group-hover:-translate-x-1 transition-transform duration-300" />
        Back to dashboard
      </Link>
      <LoginForm />
      <p className="text-gray-400 text-sm dark:text-white">
        © 2022 Horizon UI. All Rights Reserved. Made with love by Simmmple!
      </p>
    </div>
  );
}
