import "./styles/index.scss";
import { Home } from "./pages/hero";
import { Skills } from "./pages/skills";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Blog } from "./pages/Blog";
import { Routes, Route } from "react-router-dom";
import { BlogPostDetails } from "./pages/Blog";
import { Portfolio } from "./pages/Portfolio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPostDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/portfolio" element={<Portfolio />} />
      {/* Add this before any catchall route */}
      {import.meta.env.VITE_TEMPO && (
        <Route path="/tempobook/*" element={null} />
      )}
    </Routes>
  );
}

export default App;
