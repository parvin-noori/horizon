import { Button } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { IoFingerPrint } from "react-icons/io5";
export default function Cards() {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-secondary rounded-2xl shadow py-5 px-6 flex justify-between flex-col space-y-5">
      <IoFingerPrint className="text-7xl text-primary" />
      <h3 className=" text-xl font-semibold">
        {t("pages.dashboard.card.title")}
      </h3>
      <p className="text-sm text-slate-400">
        {t("pages.dashboard.card.subtitle")}
      </p>
      <Button size="lg" color="primary">
        {t("pages.dashboard.card.cards")}
      </Button>
    </div>
  );
}
