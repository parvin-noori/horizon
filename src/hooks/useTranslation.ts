import { useTranslation } from "react-i18next";

function toCamelCase(str: string) {
  if (typeof str !== "string") return "";

  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase());
}

export function useItemTranslation(basePath = "") {
  const { t } = useTranslation();

  const translateItem = (title: string) => {
    const key = toCamelCase(title);
    return t(`${basePath}.${key}`, title);
  };

  return { translateItem };
}
