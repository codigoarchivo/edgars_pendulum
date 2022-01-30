import React from "react";
import "../../App.css";
export const Situations = ({ dataInfo }) => {
  const { h1a, id, parrafo } = dataInfo;
  return (
    <>
      <div
        className="container position-relative px-0"
      >
        <img
          src={`./assets/img/${id}.jpg`}
          alt={id}
          className="shadow bg-fichero position-absolute"/>
        <div className="row con-pa mx-0">
          <div className="col-lg-12 rounded">
            <div className="col-lg-6  col-md-12 col-sm-12">
              <h1 className="display-6 mb-lg-3 fst-italic text-cont-primary">
                {h1a}
              </h1>
              <p className="lead mb-lg-5  text-cont-white">{parrafo}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
