import "./styles/index.scss";
import { Home } from "./pages/hero";
import { Skills } from "./pages/skills";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Blog } from "./pages/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogPostDetails } from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/blog/:postName" element={<BlogPostDetails />} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
