import React from "react";
import "./popup.css";
export const Popup = ({ parrafo, h1b, popup, direcc }) => {
  return (
    <>
      <div className="popup" id={popup}>
        <div className="popup__content">
          <div className="popup__left">
            {/* <img
              src="./assets/img/a.jpg"
              alt="photo"
              className="popup__img"
            /> */}
          </div>
          <div className="popup__right">
            <a href={`#${direcc}`} className="popup__close">
              &times;
            </a>
            <h2 className="heading-segundary u-margin-bottom-small">{h1b}</h2>
            <p className="popup__text">{parrafo}</p>
            {/* <a href="" className="btn btn--green">
              {" "}
              book Now
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};
