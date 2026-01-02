import { Button } from "@heroui/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "./languageSlice";
import { GrLanguage } from "react-icons/gr";

export default function LanguageButton({ className }) {
  const language = useSelector((state) => state.lang.lang);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
    document.body.dir = language === "fa" ? "rtl" : "ltr";
  }, [language]);

  return (
    
    <Button
      isOnlyIcon
      variant="light"
      radius="none"
      className={`!min-w-auto shrink-0 p-0 !aspect-square ${className}`}
      onPress={() => dispatch(changeLang(language === "fa" ? "en" : "fa"))}
    >
      {/* {language === "fa" ? "farsi" : "eng"} */}
      <GrLanguage />
    </Button>
  );
}
