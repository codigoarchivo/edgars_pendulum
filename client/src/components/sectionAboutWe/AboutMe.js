import React from "react";
import { useTranslation } from "react-i18next";
import "./AboutMe.css";
export const MoreInformation = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <h2>
        <span
          className="border-color-cont"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {t("MoreInformation.seccion")}{" "}
          <span className="text-cont-primary">
            {" "}
            {t("MoreInformation.servicios")}
          </span>
        </span>
      </h2>

      <div className="row featurette justify-content-center align-items-center py-3">
        <div className="col-md-6 order-md-2">
          <div className="rounded-3">
            <h2 data-aos="fade-down" data-aos-duration="1000">
              {t("MoreInformation.como")}{" "}
              <span className="text-cont-primary">
                {t("MoreInformation.trabajo")}
              </span>
            </h2>
            <p className="py-4 text-com">{t("MoreInformation.relaja")}</p>
          </div>
        </div>
        <div className="col-md-6 col-sm-8  my-2 order-md-1 d-flex justify-content-center">
          <img
            src={"./assets/img/contimg2.jpg"}
            className="img-fluid img-thumbnail"
            alt="Foto"
          />
        </div>
      </div>
      <div className="row featurette align-items-center justify-content-center py-3">
        <div className="col-md-6">
          <div className="mr-5 rounded-3">
            <h2 data-aos="fade-down" data-aos-duration="1000">
              {t("MoreInformation.que")}{" "}
              <span className="text-cont-primary">
                {t("MoreInformation.nece")}
              </span>
            </h2>
            <p className="py-4 text-com">{t("MoreInformation.muchos")}</p>
          </div>
        </div>
        <div className="col-md-5 col-sm-8 my-2 d-flex justify-content-center">
          <img
            src={"./assets/img/contimg1.png"}
            className="img-fluid img-thumbnail"
            alt="Foto"
          />
        </div>
      </div>
    </>
  );
};
