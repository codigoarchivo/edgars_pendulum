import React from "react";
import Typed from "typed.js";
import "./layouts.css";
export const Hero = () => {
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
          <div className="px-4 py-5 my-5 text-center">
            <img
              className="d-block mx-auto mb-4 border-color p-1"
              src="/assets/img/favicon-white.png"
              alt=""
              width="55"
              height="57"
            />
            <h1 className="display-5 fw-bold">
              <span ref={el}></span>
            </h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4 hero-p">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
              </p>
            </div>
          </div>
          {/* <h1>
            <span ref={el}></span>
          </h1>

          <p className="my-lg-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            consequuntur?
          </p>

          <button className="ripple btn shadow">
            Click Me
          </button> */}
        </div>
      </div>
    </>
  );
};
