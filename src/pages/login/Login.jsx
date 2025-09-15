import React from "react";
import { Link } from "react-router";
import LoginForm from "./loginForm";

export default function Login() {
  return (
    <div className="lg:h-svh flex flex-col lg:gap-y-0 gap-y-10 justify-between p-5 max-w-lg">
      <Link to="/" className="text-gray-400 hover:text-gray-600 text-sm">
        Back to dashboard
      </Link>
      <LoginForm />
      <p className="text-gray-400 text-sm">
        © 2022 Horizon UI. All Rights Reserved. Made with love by Simmmple!
      </p>
    </div>
  );
}
