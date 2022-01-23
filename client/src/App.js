import { Footer } from "./components/layouts/Footer";
import { Hero } from "./components/layouts/Hero";
import { Nav } from "./components/layouts/Nav";
import { AboutScreen } from "./components/sectionAbout/AboutScreen";
import { MoreInformation } from "./components/sectionAboutWe/AboutMe";
import { CardServicesScreen } from "./components/sectionServices/CardServicesScreen";
import { SituationsScreen } from "./components/sectionSituations/SituationsScreen";
import { PresentationScreeen } from "./components/sectionPresentation/PresentationScreeen";

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
        <section className="container py-lg-5">
          <PresentationScreeen />
        </section>
        <section className="container pb-5" id="workarea">
          <AboutScreen />
        </section>
        <section className="container py-5">
          <SituationsScreen />
        </section>
        <section className="container-fluid pb-5" id="aboutme">
          <CardServicesScreen />
        </section>
        <section className="container py-5" id="servicearea">
          <MoreInformation />
        </section>
      </main>
      <div className="container-fluid bg-blu-ligth">
        <Footer />
      </div>
    </>
  );
}

export default App;
