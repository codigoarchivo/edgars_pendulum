import React from "react";
export const Nav = () => {
  return (
    <>
      <nav className="py-lg-3 navbar navbar-expand-lg navbar-light bg-blu-ligth shadow-lg fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <img
                src="/assets/img/logo.png"
                className="img-fluid nav-img mx-5"
                alt="Foto"
              />
              <li className="nav-item">
                <a
                  className="nav-link text-light active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light active"
                  aria-current="page"
                  href="#"
                >
                  About we do
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light active"
                  aria-current="page"
                  href="#"
                >
                  About me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light active"
                  aria-current="page"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light active"
                  aria-current="page"
                  href="#"
                >
                  Prices
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto mt-3 mt-lg-0 mx-5">
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="#">
                  <i className="fab fa-twitter"></i>
                  <span className="d-lg-none ml-3">Twitter</span>
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="#">
                  <i className="fab fa-facebook"></i>
                  <span className="d-lg-none ml-3">Facebook</span>
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="#">
                  <i className="fab fa-instagram"></i>
                  <span className="d-lg-none ml-3">Instagram</span>
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="#">
                  <i className="fab fa-linkedin"></i>
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
