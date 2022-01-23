import React from "react";
import "./AboutMe.css"
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
              How we <span className="text-cont-primary">work</span>
            </h2>
            <p className="py-4 text-com">
              Relaja tu mente, inspira hondo, cuenta hasta tres. Estás fluyendo.
              El universo te rodea y te abraza. Acabas de entrar en el universo
              etéreo y espiritual. Nosotros trabajamos de dos maneras presencial
              mediante las medidas de bioseguridad y no presencial mediante
              medios, online no le quitamos para nada su tiempo.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-8  my-2 order-md-1 d-flex justify-content-center">
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
              What do we need{" "}
              <span className="text-cont-primary">from you?</span>
            </h2>
            <p className="py-4 text-com">
              Muchos creen en la afirmación de que "todo es energía". La leemos
              en todas partes, pero se nos dificulta vernos a nosotros mismos
              como una central energética con sus centros de producción,
              limpieza e irradiación. Para poder sentir esas energias solo lo
              que necesito de usted es información necesaria como una fotografia
              y el nombre y yo canalizare su investigación,luego le enviamos su
              análisis enviado de manera online, presencioal, escrito en carta,
              o red social
            </p>
          </div>
        </div>
        <div className="col-md-5 col-sm-8 my-2 d-flex justify-content-center">
          <img
            src={"./assets/img/contimg1.png"}
            className="img-fluid img-thumbnail"
            alt="Foto"
          />
        </div>
      </div>
    </>
  );
};
