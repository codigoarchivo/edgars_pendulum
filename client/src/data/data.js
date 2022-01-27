import { useTranslation } from "react-i18next";

export const DataCont2 = () => {
  const [t] = useTranslation("global");
  const data2 = [
    {
      id: "Situations1",
      h1a: t("SituationsScreen.salud"),
      parrafo: t("SituationsScreen.edad"),
    },
    {
      id: "Situations2",
      h1a: t("SituationsScreen.canalizo"),
      parrafo: t("SituationsScreen.marca"),
    },
    {
      id: "Situations3",
      h1a: t("SituationsScreen.adicto"),
      parrafo: t("SituationsScreen.problema"),
    },
    {
      id: "Situations4",
      h1a: t("SituationsScreen.varillas"),
      parrafo: t("SituationsScreen.capacidad"),
    },
    {
      id: "Situations5",
      h1a: t("SituationsScreen.gente"),
      parrafo: t("SituationsScreen.actualidad"),
    },
    {
      id: "Situations6",
      h1a: t("SituationsScreen.objetos"),
      parrafo: t("SituationsScreen.vive"),
    },
  ];
  return { data2 };
};

export const DataCont1 = () => {
  const [t] = useTranslation("global");
  const data = [
    {
      carInfo: [
        {
          id: t("CardServicesScreen.deporte"),
          ul1: t("CardServicesScreen.obtener"),
          ul2: t("CardServicesScreen.ganar"),
          ul3: t("CardServicesScreen.mejora"),
          ul4: t("CardServicesScreen.busca"),
          ul5: t("CardServicesScreen.atraer"),
          h1a: t("CardServicesScreen.informacion"),
          more: t("CardServicesScreen.more"),
          p: t("CardServicesScreen.carrera"),
        },
        {
          id: t("CardServicesScreen.real"),
          ul1: t("CardServicesScreen.house"),
          ul2: t("CardServicesScreen.ganar"),
          ul3: t("CardServicesScreen.exito"),
          ul4: t("CardServicesScreen.ingreso"),
          ul5: t("CardServicesScreen.buscar"),
          h1a: t("CardServicesScreen.informacion"),
          more: t("CardServicesScreen.more"),
          p: t("CardServicesScreen.invertir"),
        },
        {
          id: t("CardServicesScreen.artista"),
          ul5: t("CardServicesScreen.buscar"),
          ul2: t("CardServicesScreen.ganar"),
          ul1: t("CardServicesScreen.inpulsa"),
          ul3: t("CardServicesScreen.romper"),
          ul4: t("CardServicesScreen.rodeate"),
          h1a: t("CardServicesScreen.informacion"),
          more: t("CardServicesScreen.more"),
          p: t("CardServicesScreen.como"),
        },
      ],
    },
    {
      carInfo: [
        {
          id: t("CardServicesScreen.salud"),
          ul5: t("CardServicesScreen.labora"),
          ul2: t("CardServicesScreen.buena"),
          ul1: t("CardServicesScreen.armonia"),
          ul3: t("CardServicesScreen.menos"),
          ul4: t("CardServicesScreen.mwjora"),
          h1a: t("CardServicesScreen.informacion"),
          more: t("CardServicesScreen.more"),
          p: t("CardServicesScreen.medicina"),
        },
        {
          id: t("CardServicesScreen.industria"),
          ul5: t("CardServicesScreen.produccion"),
          ul2: t("CardServicesScreen.perdida"),
          ul1: t("CardServicesScreen.nueva"),
          ul3: t("CardServicesScreen.ganar"),
          ul4: t("CardServicesScreen.sentir"),
          h1a: t("CardServicesScreen.informacion"),
          more: t("CardServicesScreen.more"),
          p: t("CardServicesScreen.busqueda"),
        },
        {
          id: t("CardServicesScreen.bolsa"),
          ul3: t("CardServicesScreen.mejor"),
          ul2: t("CardServicesScreen.canal"),
          ul1: t("CardServicesScreen.ganar"),
          ul5: t("CardServicesScreen.objetivo"),
          ul4: t("CardServicesScreen.buenas"),
          h1a: t("CardServicesScreen.informacion"),
          more: t("CardServicesScreen.more"),
          p: t("CardServicesScreen.para"),
        },
      ],
    },
    {
      carInfo: [
        {
          id: t("CardServicesScreen.estudios"),
          ul3: t("CardServicesScreen.mejor"),
          ul2: t("CardServicesScreen.ayuda"),
          ul1: t("CardServicesScreen.sen"),
          ul5: t("CardServicesScreen.estudio"),
          ul4: t("CardServicesScreen.mala"),
          h1a: t("CardServicesScreen.informacion"),
          more: t("CardServicesScreen.more"),
          p: t("CardServicesScreen.habito"),
        },
        {
          id: t("CardServicesScreen.politica"),
          ul3: t("CardServicesScreen.creamo"),
          ul2: t("CardServicesScreen.lograr"),
          ul1: t("CardServicesScreen.compe"),
          ul5: t("CardServicesScreen.encuesta"),
          ul4: t("CardServicesScreen.bus"),
          h1a: t("CardServicesScreen.informacion"),
          more: t("CardServicesScreen.more"),
          p: t("CardServicesScreen.tener"),
        },
        {
          id: t("CardServicesScreen.negocio"),
          ul3: t("CardServicesScreen.capa"),
          ul2: t("CardServicesScreen.quit"),
          ul1: t("CardServicesScreen.evitamos"),
          ul5: t("CardServicesScreen.calne"),
          ul4: t("CardServicesScreen.oport"),
          h1a: t("CardServicesScreen.informacion"),
          more: t("CardServicesScreen.more"),
          p: t("CardServicesScreen.sencillez"),
        },
      ],
    },
  ];
  return { data };
};
