import React from "react";
import { useTranslation } from "react-i18next";

export const Nav = () => {
  const [t] = useTranslation("global");
  const [navBackground, setNavBackground] = React.useState(false);

  const navRef = React.useRef();
  navRef.current = navBackground;

  React.useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const identificador = (valor) => {
    document.getElementById(valor).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className=" navbar navbar-expand-lg nav-media shadow-lg fixed-top"
        style={{
          transition: ".4s ease",
          backgroundColor: navBackground ? "#0077b6" : "rgba(0, 0, 0, 0.1)",
          opacity: navBackground ? "1" : ".7",
        }}
      >
        <div className="container-fluid">
          <button
            className="navbar-media navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-align-justify navbar-toggler-icon"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="navbar-brand  px-lg-4 ">
                <img
                  src="/assets/img/logo-white.png"
                  className="nav-img img-media cursor-pointer"
                  alt="Foto"
                  width="70"
                  height="30"
                  onClick={() => identificador("home")}
                />
              </li>

              <li className="nav-item">
                <span
                  className="nav-link cursor-pointer active bg-blu-ligth rounded"
                  aria-current="page"
                  onClick={() => identificador("edgars")}
                >
                  Edgars pendulum
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link cursor-pointer"
                  aria-current="page"
                  onClick={() => identificador("workarea")}
                >
                  {t("header.trabajo")}
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link cursor-pointer"
                  aria-current="page"
                  onClick={() => identificador("servicearea")}
                >
                  {t("header.servicio")}
                </span>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="nav-link">
                  <strong>+1 9085316962  {t("header.llama")}</strong>
                </span>
              </li>
            </ul>
            <ul className="navbar-nav  mx-lg-4">
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link cursor-pointer"
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://twitter.com/edgarspendulum?t=PmWj-xl1JJ407GU2Lk8wDg&s=09"
                >
                  <i className="fab fa-twitter"></i>{" "}
                  <span className="d-lg-none ml-3">Twitter</span>
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link cursor-pointer"
                  href="https://www.facebook.com/edgar.marcanosantodomingo"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook"></i>{" "}
                  <span className="d-lg-none ml-3">Facebook</span>
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link cursor-pointer"
                  href="https://www.instagram.com/p/CYcsvrVgEC5/?utm_medium=share_sheet"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>{" "}
                  <span className="d-lg-none ml-3">Instagram</span>
                </a>{" "}
              </li>
              <li className="nav-item cursor-pointer">
                {" "}
                <a
                  className="nav-link"
                  target={"_blank"}
                  href="@edgarspendulum"
                  rel="noreferrer"
                >
                  <i className="fab fa-telegram-plane"></i>{" "}
                  <span className="d-lg-none ml-3">Linkedin</span>
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
