import React from "react";

export const MoreInformation = () => {
  return (
    <>
      <h2 className="pb-2 mb-5 border-bottom  border-primary">
      Service Area
      </h2>
      <div className="row featurette">
        <div className="col-md-7">
          <div className="h-100 p-5 bg-blu-ligth rounded-3">
            <h2>How we work</h2>
            <p>
              Through the use of the pendulum as a connection with divinity
              detecting the recordings of models and patterns for your
              development to success
            </p>
          </div>
        </div>
        <div className="col-md-5">
          <img
            src={"./assets/img/contimg1.jpg"}
            className="img-fluid img-thumbnail"
            alt="Foto"
          />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <div className="h-100 p-5 bg-blu-ligth rounded-3">
            <h2>What do we need from you?</h2>
            <p>
              Swap the background-color utility and add a `.text-*` color
              utility to mix up the jumbotron look. Then, mix and match with
              additional component themes and more.
            </p>
          </div>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            src={"./assets/img/contimg2.jpg"}
            className="img-fluid img-thumbnail"
            alt="Foto"
          />
        </div>
      </div>
    </>
  );
};
