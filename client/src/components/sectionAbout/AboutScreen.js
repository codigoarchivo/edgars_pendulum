import React from "react";

export const AboutScreen = () => {
  return (
    <>
      <div className="container px-4" id="icon-grid">
        <h2 className="mb-5">
          <span
            data-aos="fade-up"
            data-aos-duration="2000"
            className="border-color-cont"
          >
            Work <span className="text-cont-primary">Area</span>
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
              <h4 className="fw-bold mb-0">Real estate</h4>
              <p>Activos que no pueden moverse de su lugar de origen.</p>
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
              <h4 className="fw-bold mb-0">Sports</h4>
              <p>
                todo tipo de deportes un impulso para tu carrera profesional.
              </p>
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
              <h4 className="fw-bold mb-0">Health</h4>
              <p>
                Ayudamos desde enfermedades, hasta la parte Profesional medica.
              </p>
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
              <h4 className="fw-bold mb-0">Industries</h4>
              <p>
                Desarrollamo enfoque de creciemiento economico mediante seres
                luces.
              </p>
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
              <h4 className="fw-bold mb-0">Stock Market</h4>
              <p>
                Ayudamo acuidar tus inversiones economicas canalizamos buena
                suerte.
              </p>
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
              <h4 className="fw-bold mb-0">Studies</h4>
              <p>
                Te ayudamos en tu estudio profesional pueda alcanzar tus metas.
              </p>
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
              <h4 className="fw-bold mb-0">Artists</h4>
              <p>
                impulsamos a los artista mediante los seres de luz a ser mas populares.
              </p>
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
              <h4 className="fw-bold mb-0">Politics</h4>
              <p>
                Ayudamos para que quedes primero en las encuesta tenga mas posibilida ganar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
