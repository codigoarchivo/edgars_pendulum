import React from "react";
import "../../App.css";
export const Situations = ({ dataInfo }) => {
  const { h1a, id, parrafo } = dataInfo;
  return (
    <>
      <div
        className="container border-color shadow bg-fichero img-fluid img-thumbnail"
        style={{
          backgroundImage: `url(./assets/img/${id}.jpg)`,
        }}
      >
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 p-4 p-md-5 mb-4 rounded">
            <div className="col-md-6 px-0">
              <h1 className="display-6 fst-italic text-cont-primary">{h1a}</h1>
              <p className="lead my-3 text-cont-white">{parrafo}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
