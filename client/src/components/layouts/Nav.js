import React from "react";

export const Nav = () => {
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
        className="py-lg-4  navbar navbar-expand-lg nav-media shadow-lg fixed-top"
        style={{
          transition: ".4s ease",
          backgroundColor: navBackground ? "#0077b6" : "rgba(0, 0, 0, 0.1)",
          opacity: navBackground ? "1" : ".7",
        }}
      >
        <div className="container-fluid">
          <button
            className="navbar-media"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-align-justify fa-2x"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <img
                src="/assets/img/logo-white.png"
                className="img-fluid nav-img mx-4  img-media"
                alt="Foto"
              />
              <li className="nav-item">
                <span
                  className="nav-link cursor-pointer active"
                  aria-current="page"
                  onClick={() => identificador("home")}
                >
                  Home
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link cursor-pointer"
                  aria-current="page"
                  onClick={() => identificador("workarea")}
                >
                  Work Area
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link cursor-pointer"
                  aria-current="page"
                  onClick={() => identificador("aboutme")}
                >
                  About me
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link cursor-pointer"
                  aria-current="page"
                  onClick={() => identificador("servicearea")}
                >
                  Service Area
                </span>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="d-flex flex-column list-unstyled col-4 w-100 text-cont-white">
                <span>
                  {" "}
                  <strong className="text-orange-dark">Free Call</strong>{" "}
                  <strong>+1 9735108452</strong>
                </span>
                <span>Call Us Now 24/7 Customer Support</span>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto mt-3 mt-lg-0 mx-5">
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link cursor-pointer"
                  href="https://twitter.com/edgarspendulum?t=PmWj-xl1JJ407GU2Lk8wDg&s=09"
                >
                  <i className="fab fa-twitter"></i>
                  <span className="d-lg-none ml-3">Twitter</span>
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link cursor-pointer"
                  href="https://www.facebook.com/edgar.marcanosantodomingo"
                >
                  <i className="fab fa-facebook"></i>
                  <span className="d-lg-none ml-3">Facebook</span>
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link cursor-pointer"
                  href="https://www.instagram.com/p/CYcsvrVgEC5/?utm_medium=share_sheet"
                >
                  <i className="fab fa-instagram"></i>
                  <span className="d-lg-none ml-3">Instagram</span>
                </a>{" "}
              </li>
              <li className="nav-item cursor-pointer">
                {" "}
                <a className="nav-link " href="@edgarspendulum">
                  <i className="fab fa-telegram-plane"></i>
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
