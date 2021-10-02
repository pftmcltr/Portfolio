import "./App.css";
import {
  AboutMe,
  Header,
  HomePage,
  Skills,
  Contact,
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
    </div>
  );
}

export default App;
