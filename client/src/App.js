import "./App.css";
import { Footer } from "./components/layouts/Footer";
import { Hero } from "./components/layouts/Hero";
import { Nav } from "./components/layouts/Nav";
import { AboutScreen } from "./components/sectionAbout/AboutScreen";
import { AboutMe } from "./components/sectionAboutWe/AboutMe";
import { CardServicesScreen } from "./components/sectionServices/CardServicesScreen";

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
        <section className="container-fluid">
          <CardServicesScreen />
        </section>
        <section className="container">
          <AboutMe />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
