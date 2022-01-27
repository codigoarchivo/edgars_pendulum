import React from "react";
import ReactDOM from "react-dom";
import i18Next from "i18next";
import { I18nextProvider } from "react-i18next";
import AOS from "aos";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

import "aos/dist/aos.css";
import "./index.css";
AOS.init();

i18Next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18Next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
