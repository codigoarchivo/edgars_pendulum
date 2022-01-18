import { Footer } from "./components/layouts/Footer";
import { Hero } from "./components/layouts/Hero";
import { Nav } from "./components/layouts/Nav";
import { AboutScreen } from "./components/sectionAbout/AboutScreen";
import { MoreInformation } from "./components/sectionAboutWe/AboutMe";
import { CardServicesScreen } from "./components/sectionServices/CardServicesScreen";
import { SituationsScreen } from "./components/sectionSituations/SituationsScreen";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Nav />
        <Hero />
      </header>
      <main>
        <section className="container">
          <AboutScreen />
        </section>
        <section className="container">
          <SituationsScreen />
        </section>
        <section className="container-fluid">
          <CardServicesScreen />
        </section>
        <section className="container my-5">
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
