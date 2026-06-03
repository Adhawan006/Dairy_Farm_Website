import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Farm from "./pages/Farm";
import Products from "./pages/Products";
import MediaGallery from "./pages/MediaGallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/farm" element={<Farm />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<MediaGallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;