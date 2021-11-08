import "./App.css";
import {
  AboutMe,
  Header,
  HomePage,
  Skills,
  Footer,
  Contact,
  Projects,
} from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Router>
      <div className="bg-orange">
        <Header />
        <HomePage />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
