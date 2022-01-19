import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="pt-5 border-top container">
        <div className="row">
          <div className="col-6 col-md">
            <h5>Work Area</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="text-cont-white  text-decoration-none" href="#">
                  <i className="fas fa-angle-right"></i> Cool stuff
                </a>
              </li>
              <li className="mb-1">
                <a className="text-cont-white  text-decoration-none" href="#">
                  <i className="fas fa-angle-right"></i> Random feature
                </a>
              </li>
              <li className="mb-1">
                <a className="text-cont-white  text-decoration-none" href="#">
                  <i className="fas fa-angle-right"></i> Team feature
                </a>
              </li>
              <li className="mb-1">
                <a className="text-cont-white  text-decoration-none" href="#">
                  <i className="fas fa-angle-right"></i> Stuff for developers
                </a>
              </li>
              <li className="mb-1">
                <a className="text-cont-white  text-decoration-none" href="#">
                  <i className="fas fa-angle-right"></i> Another one
                </a>
              </li>
              <li className="mb-1">
                <a className="text-cont-white  text-decoration-none" href="#">
                  <i className="fas fa-angle-right"></i> Last time
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Spiritual Area</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="text-cont-white  text-decoration-none" href="#">
                  <i className="fas fa-angle-right"></i> Resource
                </a>
              </li>
              <li className="mb-1">
                <a className="text-cont-white  text-decoration-none" href="#">
                  <i className="fas fa-angle-right"></i> Resource name
                </a>
              </li>
              <li className="mb-1">
                <a className="text-cont-white  text-decoration-none" href="#">
                  <i className="fas fa-angle-right"></i> Another resource
                </a>
              </li>
              <li className="mb-1">
                <a className="text-cont-white  text-decoration-none" href="#">
                  <i className="fas fa-angle-right"></i> Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5 className="footer-h5">Service Area</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="text-cont-white  text-decoration-none" href="#">
                  <i className="fas fa-angle-right"></i> Team
                </a>
              </li>
              <li className="mb-1">
                <a className="text-cont-white  text-decoration-none" href="#">
                  <i className="fas fa-angle-right"></i> Locations
                </a>
              </li>
              <li className="mb-1">
                <a className="text-cont-white  text-decoration-none" href="#">
                  <i className="fas fa-angle-right"></i> Privacy
                </a>
              </li>
              <li className="mb-1">
                <a className="text-cont-white  text-decoration-none" href="#">
                  <i className="fas fa-angle-right"></i> Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 py-4 col-md row text-center justify-content-center">
          <img className="mb-2 w-30 img-fluid" src="/assets/img/logo-white.png" alt="Foto" />
          <small className="d-block mb-3 text-cont-white">
           Todos los Derechos Reservados &copy; 2017–{new Date().getFullYear()}
          </small>
        </div>
      </footer>
    </>
  );
};
