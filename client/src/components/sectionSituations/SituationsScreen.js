import React from "react";
import { DataCont2 } from "../../data/data";
import { Situations } from "./Situations";
import "./Situations.css";
export const SituationsScreen = () => {
  const { data2 } = DataCont2();
  return (
    <>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide position-relative"
        data-bs-ride="carousel"
        data-bs-interval={"false"}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Situations dataInfo={data2[0]} />
          </div>
          <div className="carousel-item">
            <Situations dataInfo={data2[1]} />
          </div>
          <div className="carousel-item">
            <Situations dataInfo={data2[2]} />
          </div>
          <div className="carousel-item">
            <Situations dataInfo={data2[3]} />
          </div>
          <div className="carousel-item">
            <Situations dataInfo={data2[4]} />
          </div>
          <div className="carousel-item">
            <Situations dataInfo={data2[5]} />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
