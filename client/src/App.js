import { Footer } from "./components/layouts/Footer";
import { Hero } from "./components/layouts/Hero";
import { Nav } from "./components/layouts/Nav";
import { AboutScreen } from "./components/sectionAbout/AboutScreen";
import { MoreInformation } from "./components/sectionAboutWe/AboutMe";
import { CardServicesScreen } from "./components/sectionServices/CardServicesScreen";
import { SituationsScreen } from "./components/sectionSituations/SituationsScreen";
import "./App.css";
import "./css/all.min.css"
import "./css/bootstrap.min.css"

function App() {
  return (
    <>
      <header id="home">
        <Nav />
        <Hero />
      </header>
      <main>
        <section className="container" id="workarea">
          <AboutScreen />
        </section>
        <section className="container">
          <SituationsScreen />
        </section>
        <section className="container-fluid" id="aboutme">
          <CardServicesScreen />
        </section>
        <section className="container my-5" id="servicearea">
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
