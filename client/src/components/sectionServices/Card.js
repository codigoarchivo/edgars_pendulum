import React from "react";
import { Popup } from "./Popup";

const newData = {
  titulo: "",
  descripcion: "",
};
export const Card = ({ data, secCont }) => {
  const { carInfo } = data;

  const [listCard, setlistCard] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [form, setForm] = React.useState(newData);

  React.useEffect(() => {
    if (carInfo) {
      setlistCard(carInfo);
    } else {
      setlistCard([]);
    }
  }, [carInfo, setlistCard]);

  React.useEffect(() => {
    if (form) {
      setForm(form);
    } else {
      setForm(newData);
    }
  }, [form, setForm]);

  const handleShow = (p, h) => {
    setForm({ ...form, titulo: h, descripcion: p });
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setForm(newData);
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <div className="container p-4" id={secCont}>
          <h2>
            {" "}
            <span
              className="border-color-cont"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Spiritual <span className="text-cont-primary">Area</span>
            </span>
          </h2>
          <div className="row justify-content-evenly">
            {listCard.map((x) => (
              <div key={x.ul1} className="col-lg-4 col-md-7 col-sm-9 pt-5">
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
                      <button
                        onClick={() => handleShow(x.p, x.id)}
                        className="btn bg-secondary"
                      >
                        More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <Popup form={form} show={show} handleClose={handleClose} />
      </div>
    </>
  );
};
