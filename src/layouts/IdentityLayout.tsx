import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router";
import LanguageButton from "../features/language/LanguageButton";
import ThemeButton from "../features/theme/ThemeButton";
import { RootState } from "../types/store";
import loginHeroImage from "/imgs/login-hero.png";

export default function IdentityLayout() {
  const language = useSelector((state: RootState) => state.lang.lang);
  const { t } = useTranslation();
  const menuItem = [
    { name: t("signIn.menuItems.blog"), link: "/blog" },
    { name: t("signIn.menuItems.termsOfUs"), link: "/terms" },
    { name: t("signIn.menuItems.license"), link: "/license" },
    { name: t("signIn.menuItems.marketPlace"), link: "/marketPlace" },
  ];
  return (
    <div className="grid lg:grid-cols-2 h-dvh md:place-content-center">
      <div className="flex justify-center">
        <Outlet />
      </div>
      <div className="relative lg:block hidden">
        <img
          src={loginHeroImage}
          alt="Login Hero"
          className={`${
            language === "fa" ? "-scale-x-100" : ""
          } h-dvh w-full object-cover`}
        />
        <div className="flex gap-x-4 absolute bottom-5 text-sm justify-center items-center w-full">
          <div className="absolute bottom-0 end-5 text-white flex flex-col rounded-lg overflow-hidden">
            <ThemeButton
              className={
                " hover:bg-white/30 transition-color duration-300  cursor-pointer  text-white size-12 bg-white/20 dark:bg-background/20 backdrop-blur-md grid place-content-center "
              }
            />
            <LanguageButton
              className={
                " hover:bg-white/30 transition-color duration-300  cursor-pointer  text-white size-12 bg-white/20 dark:bg-background/20 backdrop-blur-md grid place-content-center "
              }
            />
          </div>
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
