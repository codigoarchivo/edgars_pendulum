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
            {t("AboutScreen.sec")}
            <span className="text-cont-primary">
              {t("AboutScreen.tra")}
            </span>
          </span>
        </h2>
        <h2 className="mb-5">
          <span
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            {t("AboutScreen.sistema")}
          </span>
        </h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 ">
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i class="fa fa-check"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.aA")}</h4>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i class="fa fa-check"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.aB")}</h4>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i class="fa fa-check"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.aC")}</h4>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i class="fa fa-check"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.aD")}</h4>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i class="fa fa-check"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.aE")}</h4>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i class="fa fa-check"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.aF")}</h4>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i class="fa fa-check"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.aG")}</h4>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i class="fa fa-check"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.aH")}</h4>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i class="fa fa-check"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.aI")}</h4>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i class="fa fa-check"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.aJ")}</h4>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i class="fa fa-check"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.aK")}</h4>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i class="fa fa-check"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.aL")}</h4>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i class="fa fa-check"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.aLL")}</h4>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i class="fa fa-check"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.aM")}</h4>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i class="fa fa-check"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.aÑ")}</h4>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i class="fa fa-check"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.aO")}</h4>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i class="fa fa-check"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.aP")}</h4>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-cont-primary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <i class="fa fa-check"></i>
            </svg>
            <div className="text-cont-secondary">
              <h4 className="fw-bold mb-0">{t("AboutScreen.aQ")}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
