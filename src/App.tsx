import "./styles/index.scss";
import { Home } from "./pages/hero";
import { Skills } from "./pages/skills";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";

function App() {
  return (
    <>
      <Home />
      <Skills />
      <About />
      <Contact />
    </>
  );
}

export default App;
