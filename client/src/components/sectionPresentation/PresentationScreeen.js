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
          <div>
            <img
              className="img-fluid  col-lg-3 col-md-3 col-sm-3 float-start pe-3 pt-2"
              src="/assets/img/perfil.jpg"
              alt="Foto"
            />

            <p className="col-lg-12 col-md-12 col-sm-12 text-com">
              {t("PresentationScreeen.metodo")} <br />
              {t("PresentationScreeen.principio")} <br />
              {t("PresentationScreeen.mediante")} <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
