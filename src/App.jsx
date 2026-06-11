import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home          from "./pages/Home";
import About         from "./pages/About";
import Products      from "./pages/Products";
import Farm          from "./pages/Farm";
import MediaGallery  from "./pages/MediaGallery";
import Contact       from "./pages/Contact";

// Placeholder for pages not yet built
const Placeholder = ({ title }) => (
  <div style={{
    minHeight: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 12,
    fontFamily: "sans-serif",
    color: "#555",
  }}>
    <span style={{ fontSize: 48 }}>🚧</span>
    <h2 style={{ margin: 0, color: "#1a4a1a" }}>{title}</h2>
    <p style={{ margin: 0, fontSize: 14 }}>This page is coming soon.</p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar renders on every page */}
      <Navbar />

      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/about"        element={<About />} />
        <Route path="/products"     element={<Products />} />
        <Route path="/farm"         element={<Farm />} />
        <Route path="/gallery"      element={<MediaGallery />} />
        <Route path="/contact"      element={<Contact />} />

        {/* Stub routes until pages are built */}
        <Route path="/process"      element={<Placeholder title="Our Process" />} />
        <Route path="/testimonials" element={<Placeholder title="Testimonials" />} />

        {/* 404 fallback */}
        <Route path="*" element={<Placeholder title="Page Not Found" />} />
      </Routes>
    </BrowserRouter>
  );
}
