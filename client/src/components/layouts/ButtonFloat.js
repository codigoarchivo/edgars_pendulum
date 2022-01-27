import React from "react";
import { useTranslation } from "react-i18next";
export const ButtonFloat = () => {
  
  const [t, i18n] = useTranslation("global");

  const handleEnChange = () => {
    i18n.changeLanguage("en");
  };
  const handleEsChange = () => {
    i18n.changeLanguage("es");
  };

  return (
    <>
      {<>{t()} </>}
      <button
        onClick={handleEnChange}
        className="btn btn-flotante btn-position"
      >
        en
      </button>
      <button
        onClick={handleEsChange}
        className="btn btn-flotante btn-position"
      >
        es
      </button>
    </>
  );
};
