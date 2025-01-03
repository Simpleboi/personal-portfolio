import "./styles/index.scss";
import { Home } from "./pages/hero";
import { Skills } from "./pages/skills";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Blog } from "./pages/Blog";

function App() {
  return (
    <>
      <Home />
      <Skills />
      <About />
      <Contact />
      <Blog />
    </>
  );
}

export default App;
