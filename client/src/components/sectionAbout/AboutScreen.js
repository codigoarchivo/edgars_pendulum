import React from "react";
import { useTranslation } from "react-i18next";

export const AboutScreen = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <div className="container px-4" id="icon-grid">
        <h2 className="mb-5">
          <span
            data-aos="fade-up"
            data-aos-duration="2000"
            className="border-color-cont"
          >
            {t("AboutScreen.secciones")}
            <span className="text-cont-primary">
              {t("AboutScreen.trabajo")}
            </span>
          </span>
        </h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 ">
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i className="fas fa-city"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.bienes")}</h4>
              <p>{t("AboutScreen.activos")}</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i className="fas fa-football-ball"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.deportes")}</h4>
              <p>{t("AboutScreen.tipo")}</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i className="fas fa-user-md"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.salud")}</h4>
              <p>{t("AboutScreen.ayudamos")}</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i className="fas fa-industry"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.industria")}</h4>
              <p>{t("AboutScreen.desarrollo")}</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i className="fas fa-hand-holding-usd"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.bolsa")}</h4>
              <p>{t("AboutScreen.cuidar")}</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i className="fas fa-graduation-cap"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.estudios")}</h4>
              <p>{t("AboutScreen.ayuda")}</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i className="fas fa-film"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.artista")}</h4>
              <p>{t("AboutScreen.impulsa")}</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
              >
              <i className="fas fa-flag-usa"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.politica")}</h4>
              <p>{t("AboutScreen.primero")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
