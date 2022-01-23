import React from "react";
import { data } from "../../data/data";
import { Card } from "./Card";
import "./services.css";
import "./popup.css";
export const CardServicesScreen = () => {
  return (
    <>
      <div
        id="myCarousel"
        className="carousel-dark  carousel slide"
        data-bs-ride="carousel"
        data-bs-interval={false}
      >
        <div className="carousel-indicators move">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <Card data={data[0]} secCont={"section-one"} />
          </div>
          <div className="carousel-item">
            <Card data={data[1]} secCont={"section-two"} />
          </div>
          <div className="carousel-item">
            <Card data={data[2]} secCont={"section-three"} />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden text-cont-primary">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
