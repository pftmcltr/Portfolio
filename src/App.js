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

function App() {
  return (
    <div className="bg-orange">
      <Header />
      <HomePage />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
