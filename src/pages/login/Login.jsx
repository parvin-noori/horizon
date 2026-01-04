import { useTranslation } from "react-i18next";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router";
import LanguageButton from "../../features/language/LanguageButton";
import ThemeButton from "../../features/theme/ThemeButton";
import { isAuthenticated } from "../../router";
import LoginForm from "./LoginForm";

export default function Login() {
  const { t, i18n } = useTranslation();
  return (
    <div className="lg:h-dvh flex flex-col lg:gap-y-0 gap-y-10 md:justify-between p-5 max-w-lg">
      <div className="flex items-cener justify-between">
        {isAuthenticated() && (
          <Link
            to="/dashboard"
            className="text-gray-400 text-sm flex items-center gap-x-2 group"
          >
            <IoChevronBackOutline className="group-hover:-translate-x-1 transition-transform duration-300" />
            {t("signIn.backToDashboard")}
          </Link>
        )}
        <div className="flex  lg:hidden rounded-lg overflow-hidden  backdrop-blur-md">
          <ThemeButton
            className={
              " transition-color hover:text-white hover:!bg-primary duration-300 text-primary dark:bg-secondary  dark:text-white cursor-pointer  size-10 bg-secondary grid place-content-center"
            }
          />
          <LanguageButton
            className={
              "transition-color hover:text-white hover:!bg-primary duration-300 text-primary dark:bg-secondary  dark:text-white cursor-pointer  size-10 bg-secondary grid place-content-center"
            }
          />
        </div>
      </div>
      <LoginForm />
      <p className="text-gray-400 text-sm">{t("signIn.rights")}</p>
    </div>
  );
}
