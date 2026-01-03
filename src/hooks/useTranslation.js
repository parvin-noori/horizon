import { useTranslation } from "react-i18next";

function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase());
}

export function useItemTranslation(basePath = "") {
  const { t } = useTranslation();

  const translateItem = (title) => {
    const key = toCamelCase(title);
    return t(`${basePath}.${key}`, title);
  };

  return { translateItem };
}
