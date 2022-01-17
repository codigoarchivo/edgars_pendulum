import React from "react";

export const AboutScreen = () => {
  return (
    <>
      <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom">Icon grid</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              {/* <use xlink:href="#bootstrap" /> */}
            </svg>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              {/* <use xlink:href="#cpu-fill" /> */}
            </svg>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              {/* <use xlink:href="#calendar3" /> */}
            </svg>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              {/* <use xlink:href="#home" /> */}
            </svg>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              {/* <use xlink:href="#speedometer2" /> */}
            </svg>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              {/* <use xlink:href="#toggles2" /> */}
            </svg>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              {/* <use xlink:href="#geo-fill" /> */}
            </svg>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              {/* <use xlink:href="#tools" /> */}
            </svg>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">
              Title of a longer featured blog post
            </h1>
            <p className="lead my-3">
              Multiple lines of text that form the lede, informing new readers
              quickly and efficiently about what’s most interesting in this
              post’s contents.
            </p>
            <p className="lead mb-0">
              <a href="#" className="text-white fw-bold">
                Continue reading...
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
