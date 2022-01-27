import React from "react";
export const Popup = ({ form, show, handleClose }) => {
  return (
    <>
      <div hidden={!show}>
        <div className="popup">
          <div className="popup__content">
            <div className="popup__cont">
              <div
                onClick={handleClose}
                className="popup__close cursor-pointer"
              >
                &times;
              </div>
              <h2 className="heading-segundary u-margin-bottom-small">
                {form.titulo}
              </h2>
              <p className="popup__text">
                {form.descripcion} <strong>{form.publicidad}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
