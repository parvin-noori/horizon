import { Button, Card, CardBody, Image } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../types/store";
import ProductsBanner from "/imgs/ProductsBanner.png";

export default function Banner() {
  const language = useSelector((state: RootState) => state.lang.lang);
  const { t } = useTranslation();
  return (
    <Card>
      <Image
        height={300}
        width="100%"
        className={`object-cover ${language === "fa" ? "-scale-x-100" : ""}`}
        removeWrapper
        src={ProductsBanner}
        alt="Products Banner"
      />
      <CardBody className="absolute flex flex-col z-10 text-white xl:w-1/2 md:4/6 space-y-3 top-1/2 -translate-y-1/2 lg:start-10 text-start">
        <h3 className="text-3xl">{t("pages.marketPlace.banner.title")}</h3>
        <p className="text-slate-200">
          {t("pages.marketPlace.banner.subtitle")}
        </p>
        <div className="flex items-center space-x-3 mt-5">
          <Button size="lg" className="bg-white text-[#2B3674]">
            {t("buttons.discoverNow")}
          </Button>
          <Button size="lg" variant="light">
            {t("buttons.watchVideo")}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
