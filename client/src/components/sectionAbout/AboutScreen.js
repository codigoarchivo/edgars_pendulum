import React from "react";

export const AboutScreen = () => {
  return (
    <>
      <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom  border-primary">Work Area</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
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
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
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
                Paragraph of text beneath the heading to explain the heading.
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
                Paragraph of text beneath the heading to explain the heading.
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
              <h4 className="fw-bold mb-0">industries</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
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
                Paragraph of text beneath the heading to explain the heading.
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
                Paragraph of text beneath the heading to explain the heading.
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
                Paragraph of text beneath the heading to explain the heading.
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
              <h4 className="fw-bold mb-0">Politica</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
