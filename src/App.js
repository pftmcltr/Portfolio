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

function App() {
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
