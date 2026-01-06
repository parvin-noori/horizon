import { Button } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { HiUpload } from "react-icons/hi";

export default function Uploader() {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-secondary p-5 rounded-xl grid sm:grid-cols-2 items-center h-full gap-3">
      <label
        htmlFor="uploader"
        className="bg-secondary dark:bg-white/5 border cursor-pointer border-dashed border-slate-300 justify-center p-3 rounded-lg h-full flex flex-col items-center text-center gap-3"
      >
        <input type="file" id="uploader" placeholder="" className="hidden" />
        <HiUpload className="text-primary dark:text-white text-5xl" />
        <span className="capitalize text-primary dark:text-white text-xl font-semibold">
          {t("pages.profile.uploader.uploadFiles")}
        </span>
        <p className="text-slate-400 text-sm">
          {t("pages.profile.uploader.uploadFormat")}
        </p>
      </label>
      <div className="space-y-5 flex flex-col">
        <span className=" text-xl font-semibold">
          {" "}
          {t("pages.profile.uploader.title")}
        </span>
        <p className="text-slate-400 text-sm">
          {t("pages.profile.uploader.subtitle")}
        </p>
        <Button color="primary"> {t("buttons.publishNow")}</Button>
      </div>
    </div>
  );
}
