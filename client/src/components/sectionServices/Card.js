import React from "react";
import { Popup } from "./Popup";

export const Card = ({ data }) => {
  const { carInfo } = data;

  const [listCard, setlistCard] = React.useState([]);

  React.useEffect(() => {
    if (carInfo) {
      setlistCard(carInfo);
    } else {
      setlistCard([]);
    }
  }, [carInfo, setlistCard]);

  return (
    <>
      <div className="container" id="section-tour">
        <div className="row justify-content-evenly">
          {listCard.map((x) => (
            <div key={x.ul1} className="cont-iten">
              <div className="card shadow">
                <div className="card__side card__side--front">
                  <div
                    className="card__pinture"
                    style={{
                      backgroundImage:
                        "url(./assets/img/a.jpg) , linear-gradient(to right bottom, var(--primary), var(--secondary))",
                    }}
                  >
                    &nbsp;
                  </div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">
                      {x.id}
                    </span>
                  </h4>
                  <div className="card__dentails">
                    <ul>
                      <li>{x.ul1}</li>
                      <li>{x.ul2}</li>
                      <li>{x.ul3}</li>
                      <li>{x.ul4}</li>
                      <li>{x.ul5}</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back  card__side--back--1">
                  <div className="card__cta">
                    <div className="card__Acer-box">
                      <p className="card__Acer-p">{x.h1a}</p>
                    </div>
                    <a href={`#${x.popup}`} className="btn bg-secondary ">
                      More
                    </a>
                  </div>
                </div>
              </div>
              <Popup popup={x.popup} h1b={x.h1b} parrafo={x.p} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
