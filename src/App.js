import "./App.css";
import Menu from "./Menu/Menu";
import Hero from "./Hero/Hero";
import Services from "./ServiceCard/Services";
import Partners from "./Partners/Partners";
import Team from "./Team/Team";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <Services />
      <Partners />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
