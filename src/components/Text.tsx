import { FC } from "react";
import { useTranslation } from "react-i18next";

const Text: FC = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <h1>{i18n.t("root.helloWorld")}</h1>
    </>
  );
};

export default Text;
