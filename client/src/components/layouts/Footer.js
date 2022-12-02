import React from "react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <footer className="pt-5 border-top container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-5 col-sm-12">
            <h5>{t("CardServicesScreen.informacion")}</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <i className="fas fa-angle-right"></i> Tel +1 9735108452
              </li>
            </ul>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <i className="fas fa-angle-right"></i> Location New Jersey, USA
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-12">
            <h5 className="footer-h5">
              {t("MoreInformation.seccion")} {t("MoreInformation.servicios")}
            </h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a
                  className="text-white-cont  text-decoration-none"
                  href="#servicearea"
                >
                  <i className="fas fa-angle-right"></i>{" "}
                  {t("MoreInformation.trabajo")}
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="text-white-cont  text-decoration-none"
                  href="#servicearea"
                >
                  <i className="fas fa-angle-right"></i>{" "}
                  {t("MoreInformation.que")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 py-4 col-md row text-center justify-content-center">
          <img
            className="mb-2 w-30 img-fluid"
            src="/assets/img/logo-white.png"
            alt="Foto"
          />
          <small className="d-block mb-3 text-cont-white">
            {t("footer.derechos")} &copy; 2017–
            {new Date().getFullYear()}
          </small>
        </div>
      </footer>
    </>
  );
};
