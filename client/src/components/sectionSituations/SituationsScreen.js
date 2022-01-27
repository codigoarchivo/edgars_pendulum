import React from "react";
import { DataCont2 } from "../../data/data";
import { Situations } from "./Situations";
import "./Situations.css";
export const SituationsScreen = () => {
  const { data2 } = DataCont2();
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval={"10000"}
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
      </div>
    </>
  );
};
