import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="pt-5 border-top container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h5>Information</h5>
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
          <div className="col-lg-4 col-md-6  col-sm-12">
            <h5>Spiritual Area</h5>
            <div className="d-flex justify-content-space-evenly">
              <ul className="list-unstyled text-small">
                <li className="mb-1 px-1">
                  <a
                    className="text-cont-white  text-decoration-none"
                    href="#aboutme"
                  >
                    <i className="fas fa-angle-right"></i> Real estate
                  </a>
                </li>
                <li className="mb-1 px-1">
                  <a
                    className="text-cont-white  text-decoration-none"
                    href="#aboutme"
                  >
                    <i className="fas fa-angle-right"></i> Sports
                  </a>
                </li>
                <li className="mb-1 px-1">
                  <a
                    className="text-cont-white  text-decoration-none"
                    href="#aboutme"
                  >
                    <i className="fas fa-angle-right"></i> Health
                  </a>
                </li>
                <li className="mb-1 px-1">
                  <a
                    className="text-cont-white  text-decoration-none"
                    href="#aboutme"
                  >
                    <i className="fas fa-angle-right"></i> Industries
                  </a>
                </li>
                <li className="mb-1 px-1">
                  <a
                    className="text-cont-white  text-decoration-none"
                    href="#aboutme"
                  >
                    <i className="fas fa-angle-right"></i> Stock Market
                  </a>
                </li>
              </ul>
              <ul className="list-unstyled text-small">
                <li className="mb-1 px-1">
                  <a
                    className="text-cont-white  text-decoration-none"
                    href="#aboutme"
                  >
                    <i className="fas fa-angle-right"></i> Studies
                  </a>
                </li>
                <li className="mb-1 px-1">
                  <a
                    className="text-cont-white  text-decoration-none"
                    href="#aboutme"
                  >
                    <i className="fas fa-angle-right"></i> Artists
                  </a>
                </li>
                <li className="mb-1 px-1">
                  <a
                    className="text-cont-white  text-decoration-none"
                    href="#aboutme"
                  >
                    <i className="fas fa-angle-right"></i> Politics
                  </a>
                </li>
                <li className="mb-1 px-1">
                  <a
                    className="text-cont-white  text-decoration-none"
                    href="#aboutme"
                  >
                    <i className="fas fa-angle-right"></i> Business
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h5 className="footer-h5">Service Area</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a
                  className="text-cont-white  text-decoration-none"
                  href="#servicearea"
                >
                  <i className="fas fa-angle-right"></i> How we work
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="text-cont-white  text-decoration-none"
                  href="#servicearea"
                >
                  <i className="fas fa-angle-right"></i> What do we need from
                  you?
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
            Todos los Derechos Reservados &copy; 2017–{new Date().getFullYear()}
          </small>
        </div>
      </footer>
    </>
  );
};
