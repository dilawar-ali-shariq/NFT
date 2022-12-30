import "./App.css";
import Header from "./components/Header";
import WhoAreWe from "./components/WhoAreWe";
import Main from "./components/Main";
import Services from "./components/Services";
import Values from "./components/Values";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Particle from "./components/Particle";

function App() {
  return (
    <div>
      <Particle />
      <div>
        <Header/>
        <WhoAreWe />
        <Main />
        <Services />
        <Values />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
