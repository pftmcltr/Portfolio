import "./App.css";
import {
  AboutMe,
  Header,
  HomePage,
  Skills,
  Contact,
  Footer,
} from "./components";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <AboutMe />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
