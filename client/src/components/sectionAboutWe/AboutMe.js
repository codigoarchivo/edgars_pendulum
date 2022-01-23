import React from "react";

export const MoreInformation = () => {
  return (
    <>
      <h2>
        <span
          className="border-color-cont"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Service <span className="text-cont-primary">Area</span>
        </span>
      </h2>

      <div className="row featurette justify-content-center align-items-center py-3">
        <div className="col-md-6 order-md-2">
          <div className="rounded-3">
            <h2 data-aos="fade-down" data-aos-duration="1000">
              What do we need{" "}
              <span className="text-cont-primary">from you?</span>
            </h2>
            <p className="py-4">
              Swap the background-color utility and add a `.text-*` color
              utility to mix up the jumbotron look. Then, mix and match with
              additional component themes and more.
            </p>
          </div>
        </div>
        <div className="col-md-6 my-2 order-md-1 d-flex justify-content-center">
          <img
            src={"./assets/img/contimg2.jpg"}
            className="img-fluid img-thumbnail"
            alt="Foto"
          />
        </div>
      </div>
      <div className="row featurette align-items-center justify-content-center py-3">
        <div className="col-md-6">
          <div className="mr-5 rounded-3">
            <h2 data-aos="fade-down" data-aos-duration="1000">
              How we <span className="text-cont-primary">work</span>
            </h2>
            <p className="py-4">
              Through the use of the pendulum as a connection with divinity
              detecting the recordings of models and patterns for your
              development to success
            </p>
          </div>
        </div>
        <div className="col-md-6 my-2 d-flex justify-content-center">
          <img
            src={"./assets/img/contimg1.jpg"}
            className="img-fluid img-thumbnail"
            alt="Foto"
          />
        </div>
      </div>
    </>
  );
};
