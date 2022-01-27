import React from "react";
import Typed from "typed.js";
import { useTranslation } from "react-i18next";
import "./layouts.css";
export const Hero = () => {
  const [t] = useTranslation("global");
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: ["Edgars", "Pendulum"],
      typeSpeed: 60,
      backSpeed: 60,
      smartBackspace: true,
      backDelay: 1200,
      loop: true,
      loopCount: Infinity,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <>
      <div
        className="hero shadow-lg"
        style={{
          backgroundImage: "url(./assets/img/hero1.jpg)",
        }}
      >
        <div className="container-fluid">
          <div className="px-md-4 py-lg-5 my-md-5 text-center nuSpace">
            <img
              className="d-block mx-auto mb-lg-4 border-color p-lg-1"
              src="/assets/img/favicon-white.png"
              alt="Foto"
              width="55"
              height="57"
            />
            <h1 className="display-5 fw-bold">
              <span ref={el}></span>
            </h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4 hero-p">{t("header.Agradecido")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
