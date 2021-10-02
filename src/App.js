import "./App.css";
import {
  AboutMe,
  Header,
  HomePage,
  Skills,
  Contact,
  Footer,
  Projects,
} from "./components";

function App() {
  return (
    <div>
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
