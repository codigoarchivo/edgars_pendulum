import { Footer } from "./components/layouts/Footer";
import { Hero } from "./components/layouts/Hero";
import { Nav } from "./components/layouts/Nav";
import { AboutScreen } from "./components/sectionAbout/AboutScreen";
import { MoreInformation } from "./components/sectionAboutWe/AboutMe";
import { SituationsScreen } from "./components/sectionSituations/SituationsScreen";
import { PresentationScreeen } from "./components/sectionPresentation/PresentationScreeen";
import { ButtonFloat } from "./components/layouts/ButtonFloat";

import "./css/bootstrap.min.css";
import "./css/all.min.css";
import "./App.css";

function App() {
  return (
    <>
      <header id="home">
        <Nav />
        <Hero />
      </header>
      <main className="py-5">
        <section className="container py-lg-5 position-relative">
          <div
            id="edgars"
            className="position-absolute"
            style={{ top: "-3rem" }}
          ></div>
          <PresentationScreeen />
        </section>
        <section className="container pb-5 position-relative">
          <div
            id="workarea"
            className="position-absolute"
            style={{ top: "-8rem" }}
          ></div>
          <AboutScreen />
        </section>
        <section className="container px-0 py-5 position-relative">
          <SituationsScreen />
        </section>
        <section className="container py-5 position-relative">
          <div
            id="servicearea"
            className="position-absolute"
            style={{ top: "-5rem" }}
          ></div>
          <MoreInformation />
        </section>
      </main>
      <div className="container-fluid bg-blu-ligth">
        <Footer />
      </div>
      <ButtonFloat/>
    </>
  );
}

export default App;
