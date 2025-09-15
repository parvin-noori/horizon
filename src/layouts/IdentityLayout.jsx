import React from "react";
import { Link, Outlet } from "react-router";
import loginHeroImage from "/imgs/login-hero.png";

export default function IdentityLayout() {
  const menuItem = [
    { name: "Blog", link: "/blog" },
    { name: "terms of us", link: "/terms" },
    { name: "license", link: "/license" },
    { name: "marketPlace", link: "/marketPlace" },
  ];
  return (
    <div className="grid lg:grid-cols-2 lg:h-auto h-svh place-content-center">
      <div className="flex justify-center">
        <Outlet />
      </div>
      <div className="relative lg:block hidden">
        <img src={loginHeroImage} alt="Login Hero" className="size-full" />
        <div className="flex gap-x-4 absolute bottom-5 justify-center items-center w-full">
          {menuItem.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="text-white capitalize hover:text-white/70"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
