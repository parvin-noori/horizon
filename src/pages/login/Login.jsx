import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router";
import ThemeButton from "../../features/theme/ThemeButton";
import { isAuthenticated } from "../../router";
import LoginForm from "./LoginForm";
import { useTranslation } from "react-i18next";

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
            {t('signIn.backToDashboard')}
            
          </Link>
        )}
        <ThemeButton
          className={
            " hover:bg-primary lg:hidden hover:text-white transition-color duration-300 cursor-pointer  text-primary size-10 bg-secondary dark:bg-secondary dark:text-white backdrop-blur-md grid place-content-center rounded-full"
          }
        />
      </div>
      <LoginForm />
      <p className="text-gray-400 text-sm">
        {t('signIn.rights')}
      </p>
    </div>
  );
}
