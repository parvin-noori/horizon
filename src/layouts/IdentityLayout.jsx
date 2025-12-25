import React from "react";
import { Link, Outlet } from "react-router";
import loginHeroImage from "/imgs/login-hero.png";
import ThemeButton from "../features/theme/ThemeButton";

export default function IdentityLayout() {
  const menuItem = [
    { name: "Blog", link: "/blog" },
    { name: "terms of us", link: "/terms" },
    { name: "license", link: "/license" },
    { name: "marketPlace", link: "/marketPlace" },
  ];
  return (
    <div className="grid lg:grid-cols-2 h-svh md:place-content-center">
      <div className="flex justify-center">
        <Outlet />
      </div>
      <div className="relative lg:block hidden">

        <img src={loginHeroImage} alt="Login Hero" className="h-dvh w-full object-cover" />
        <div className="flex gap-x-4 absolute bottom-5 text-sm justify-center items-center w-full">
        <ThemeButton className={"absolute hover:bg-white/30 transition-color duration-300 bottom-0 cursor-pointer end-5 text-white size-12 bg-white/20 dark:bg-background/20 backdrop-blur-md grid place-content-center rounded-full"}/>
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
