import { Progress } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { BsCloudCheck } from "react-icons/bs";

export default function Storage() {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-secondary px-5 rounded-xl h-full flex flex-col py-8 gap-2">
      <div className="flex flex-col gap-y-2 items-center text-center px-5">
        <span className="bg-secondary dark:bg-white/5 size-20 rounded-full items-center flex justify-center">
          <BsCloudCheck className="text-primary dark:text-white text-4xl" />
        </span>
        <span className=" text-xl font-semibold">
          {t("pages.profile.storage.title")}
        </span>
        <p className="text-slate-400 text-sm">
          {t("pages.profile.storage.subtitle")}
        </p>
      </div>
      <div className="flex justify-between text-sm text-slate-400 mt-auto">
        <span>25.6 {t("pages.profile.Gb")}</span>
        <span>50 {t("pages.profile.Gb")}</span>
      </div>

      {/* Progress */}
      <Progress
        value={25.6}
        maxValue={50}
        color="primary"
        showValueLabel={false}
      />
    </div>
  );
}
