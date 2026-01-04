import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
} from "@heroui/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GrLanguage } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "./languageSlice";
import en from "/imgs/en.svg";
import fa from "/imgs/fa.svg";

export default function LanguageButton({ className }) {
  const language = useSelector((state) => state.lang.lang);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
    document.body.dir = language === "fa" ? "rtl" : "ltr";
    document.body.dataset.sidebarPosition =
      language === "fa" ? "right" : "left";
  }, [language, i18n]);

  const handleChangeLanguage = (lang) => {
    dispatch(changeLang(lang));
  };

  return (
    <Dropdown classNames={{ content: "p-0 rounded-lg overflow-hidden shadow" }}>
      <DropdownTrigger>
        <Button
          isOnlyIcon
          variant="light"
          radius="none"
          className={`!min-w-auto shrink-0 p-0 !aspect-square ${className}`}
        >
          <GrLanguage />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Select language"
        className="dark:bg-secondary !border-none"
      >
        <DropdownItem key="en" onPress={() => handleChangeLanguage("en")}>
          <div className="flex items-center gap-2">
            <Image src={en} />
            english
          </div>
        </DropdownItem>
        <DropdownItem key="fa" onPress={() => handleChangeLanguage("fa")}>
          <div className="flex items-center gap-2">
            <Image src={fa} />
            فارسی
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
