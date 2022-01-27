import React from "react";
import { useTranslation } from "react-i18next";
import "./PresentationScreen.css";
export const PresentationScreeen = () => {
  const [t] = useTranslation("global");
  return (
    <div className="row featurette shadow-lg mb-5">
      <div className="col-md-12">
        <div className="p-4 border-color text-cont-secondary rounded-3">
          <h2
            className="py-lg-3 d-inline-block"
            data-aos="zoom-out-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            Edgars <span className="text-cont-primary">Pendulum</span>
          </h2>
          <div className="row flex-direction-column justify-content-center">
            <img
              className="rounded img-fluid  img-thumbnail col-lg-2 col-md-5 col-sm-5"
              src="/assets/img/perfil.jpg"
              alt="Foto"
            />
            <p className="col-lg-10 col-md-7 col-sm-12 text-com ">
              {t("PresentationScreeen.metodo")}
            </p>
            <p className="text-com ">
              {t("PresentationScreeen.principio")}
              <br />
              <br />
              {t("PresentationScreeen.mediante")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
