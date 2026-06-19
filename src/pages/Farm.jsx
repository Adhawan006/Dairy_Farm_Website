import { useState } from "react";
import { jsx } from "react/jsx-runtime";
import vid1 from "./images/vid1.mp4";
import vid2 from "./images/vid2.mp4";
import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpeg";
import { Link } from "react-router-dom";

const FARM_SECTIONS = [
  {
    id: 1,
    type: "image",
    category: "Cattle",
    src: "src/pages/images/img1.jpeg",
    thumb: "src/pages/images/img1.jpeg",
    title: "Our Happy Herd",
    description:
      "Over 200 healthy Holstein and Gir cows roam our open green pastures every day. We believe happy cows produce the purest milk, so every animal receives individual care, routine health check-ups, and plenty of fresh air.",
  },
  {
    id: 2,
    type: "image",
    category: "Pastures",
    src: "src/pages/images/img2.jpeg",
    thumb: "src/pages/images/img2.jpeg",
    title: "Lush Green Pastures",
    description:
      "Spread across 50 acres of fertile land, our pastures are irrigated with pure groundwater and are completely free of pesticides. The cows graze freely from sunrise to sunset, ensuring naturally rich and flavourful milk.",
  },
  {

    id: 3,
    type: "video",
    category: "Milking",
    src: vid1,
    thumb: img1,
    title: "Hygienic Milking Process",
    description:
      "Milk is carefully handled from collection to delivery under strict hygiene and quality standards. Every step is monitored to preserve freshness and maintain purity. A video of the packaging process would need to be provided separately by the dairy.",

  },
  {
id: 4,
type: "image",
category: "Feed",
src: img3,
thumb: img3,
title: "Nutritious Feed",
description:
  "We grow our own silage, green fodder, and dry roughage right on the farm. Each cow's diet is formulated by an expert nutritionist to ensure optimum health and maximum milk yield without any artificial hormones.",
  },
  {
    id: 5,
    type: "image",
    category: "Processing",
    src: "https://plus.unsplash.com/premium_photo-1682129071833-65eed17bcf11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y293JTIwbWlsayUyMHByb2Nlc3Npbmd8ZW58MHx8MHx8fDA%3D",
    thumb: "https://plus.unsplash.com/premium_photo-1682129071833-65eed17bcf11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y293JTIwbWlsayUyMHByb2Nlc3Npbmd8ZW58MHx8MHx8fDA%3D",
    title: "Modern Processing Unit",
    description:
      "Our ISO-certified processing facility chills fresh milk within 30 minutes of milking. Pasteurisation, quality testing, and hygienic packaging are all carried out under one roof before the products reach your doorstep.",
  },
  {

    id: 6,
    type: "video",
    category: "Milking",
    src: vid2,
    thumb: img2,
    title: "Healthy Cows, Pure Milk",
    description:
      "The dairy follows hygienic and animal-friendly practices. Cows are raised in a clean, stress-free environment and are provided with high-quality natural feed. A video of the milking process would need to be provided separately by the dairy.",
  },
  {
    id: 7,
    type: "image",
    category: "Cattle",
    src: "https://media.istockphoto.com/id/1168133648/photo/vet-injection-for-cow.webp?a=1&b=1&s=612x612&w=0&k=20&c=vAx7aiRjWoyl8X9Y0d7yNvxG5xbXqz1FK0rLNwDsuE4=",
    thumb: "https://media.istockphoto.com/id/1168133648/photo/vet-injection-for-cow.webp?a=1&b=1&s=612x612&w=0&k=20&c=vAx7aiRjWoyl8X9Y0d7yNvxG5xbXqz1FK0rLNwDsuE4=",
    title: "Veterinary Care",
    description:
      "A dedicated team of in-house veterinarians conducts daily health rounds. Vaccination schedules, pregnancy monitoring, and preventive treatments ensure our herd remains strong, disease-free, and stress-free year-round.",
  },
  {
    id: 8,
    type: "image",
    category: "Infrastructure",
    src: "https://images.unsplash.com/photo-1567093323515-e4ae67890073?w=800&q=80",
    thumb: "src/pages/images/img2.jpeg",
    title: "Spacious Cattle Sheds",
    description:
      "Our well-ventilated cattle sheds are equipped with automated water troughs, rubber mat flooring, and cooling fans. Each shed comfortably houses 30 animals with ample space for movement and rest.",
  },

];

const CATEGORIES = ["All", "Cattle", "Pastures", "Milking", "Feed", "Processing", "Infrastructure"];

const STATS = [
  { value: "10+", label: "Acres of Land" },
  { value: "50+", label: "Healthy Cows" },
  { value: "2+", label: "Years Experience" },
  { value: "500+", label: "Happy Families" },
];

export default function Farm() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null); // { type, src/videoId, title, description }

 const filtered =
  activeCategory === "All"
    ? FARM_SECTIONS.filter(
        (item) =>
          item.type === "video" ||
          item.category === "Feed"
      )
    : FARM_SECTIONS.filter((item) => item.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", color: "#1a1a1a", background: "#fff" }}>
      {/* ── Hero Banner  */}
      <section
        style={{
          background: "linear-gradient(135deg, #8e9e8e 0%, #78e078 50%, #3a9a3a 100%)",
          color: "#fff",
          padding: "80px 24px 60px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* decorative circles */}
        <div style={{
          position: "absolute", top: -60, right: -60, width: 250, height: 250,
          borderRadius: "50%", background: "rgba(255,255,255,0.06)",
        }} />
        <div style={{
          position: "absolute", bottom: -40, left: -40, width: 180, height: 180,
          borderRadius: "50%", background: "rgba(255,255,255,0.05)",
        }} />

        {/* breadcrumb */}
        <p style={{ fontSize: 13, opacity: 0.75, marginBottom: 12, letterSpacing: 1 }}>
          HOME &nbsp;›&nbsp; OUR FARM
        </p>

        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, margin: "0 0 16px" }}>
          🌾 Welcome to Our Farm
        </h1>
        <p style={{ maxWidth: 620, margin: "0 auto 32px", fontSize: 16, opacity: 0.9, lineHeight: 1.7 }}>
          Step inside Shree Shyam Dairy Farm — where lush pastures, contented cattle, and
          time-tested traditions come together to bring pure, fresh dairy products to your family
          every single day.
        </p>

        {/* Stats bar */}
        <div style={{
          display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16,
          marginTop: 8,
        }}>
          {STATS.map((s) => (
            <div key={s.label} style={{
              background: "rgba(255,255,255,0.15)", backdropFilter: "blur(6px)",
              borderRadius: 12, padding: "16px 28px", minWidth: 110,
            }}>
              <div style={{ fontSize: 26, fontWeight: 800 }}>{s.value}</div>
              <div style={{ fontSize: 12, opacity: 0.85, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Main Content  */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 20px 80px" }}>

        {/* section header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: "#1a4a1a", margin: 0 }}>
            Farm Gallery
          </h2>
          <div style={{ width: 60, height: 3, background: "#2d7a2d", borderRadius: 2, margin: "10px auto 0" }} />
          <p style={{ color: "#555", marginTop: 12, fontSize: 15 }}>
            Explore photos and videos from every corner of our farm
          </p>
        </div>

        {/* Category filter pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 40 }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 20px",
                borderRadius: 50,
                border: "2px solid",
                borderColor: activeCategory === cat ? "#2d7a2d" : "#d0e8d0",
                background: activeCategory === cat ? "#2d7a2d" : "#fff",
                color: activeCategory === cat ? "#fff" : "#2d7a2d",
                fontWeight: 600,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 28,
        }}>
          {filtered.map((item) => (
            <GalleryCard key={item.id} item={item} onClick={() => setLightbox(item)} />
          ))}
        </div>
      </section>

      {/* ── Farm Story Section  */}
      <section style={{
        background: "linear-gradient(135deg, #f0f9f0 0%, #e8f5e8 100%)",
        padding: "60px 20px",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: "#1a4a1a", marginBottom: 16 }}>
            Our Story
          </h2>
          <div style={{ width: 60, height: 3, background: "#2d7a2d", borderRadius: 2, margin: "0 auto 24px" }} />
          <p style={{ color: "#444", fontSize: 16, lineHeight: 1.9, marginBottom: 20 }}>
            Welcome to Shree Shyam Dairy, a premium dairy farm located in the serene village of Dudli Gaon, Dehradun — where purity meets tradition.

            Founded by Sakshi and Deepank, a passionate husband-wife duo, our dairy is built on a shared vision of delivering pure, fresh, and unadulterated milk to every household. What started as a commitment to provide better and healthier milk for families has grown into a trusted name rooted in care, honesty, and dedication.
          </p>
          <p style={{ color: "#444", fontSize: 16, lineHeight: 1.9 }}>

            Surrounded by lush greenery and a naturally clean environment, our farm reflects the true essence of rural life. We combine traditional values with modern hygiene and quality practices to ensure that every drop of milk you receive is fresh, nutritious, and of the highest standard.

            At our farm, animal care is at the heart of everything we do. Our cows are raised with compassion, provided with high-quality natural feed, and maintained in a stress-free, hygienic environment. This directly contributes to the superior quality and purity of our milk.

            From milking to delivery, every step is carefully monitored to preserve freshness and natural goodness. Our milk is completely free from preservatives, chemicals, and adulteration — just as nature intended.

            Being rooted in Dudli Gaon allows us to stay close to our values of transparency, trust, and authenticity. We are not just delivering milk; we are delivering a promise — of purity, care, and consistency.
            Shree Shyam Dairy — From Our Family to Yours, With Purity and Trust.
          </p>
        </div>
      </section>

      {/* ── CTA Banner  */}
      <section style={{
        background: "linear-gradient(135deg, #1a4a1a, #2d7a2d)",
        color: "#fff",
        padding: "48px 24px",
        textAlign: "center",
      }}>
        <h3 style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 800, margin: "0 0 10px" }}>
          Come Visit Us in Person!
        </h3>
        <p style={{ opacity: 0.88, marginBottom: 24, fontSize: 15 }}>
          We welcome farm visits every Sunday. See our processes, meet the cows, and taste the difference.
        </p>
        <Link
  to="/contact"
  style={{
    background: "#fff",
    color: "#1a4a1a",
    borderRadius: 8,
    padding: "14px 36px",
    fontWeight: 700,
    fontSize: 15,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
  }}
>
  📞 Contact Us Today
</Link>
      </section>

      {/* ── Lightbox  */}
      {lightbox && (
        <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
      )}
    </div>
  );
}

/* ── Gallery Card Component  */
function GalleryCard({ item, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 16,
        overflow: "hidden",
        background: "#fff",
        boxShadow: hovered
          ? "0 16px 48px rgba(45,122,45,0.22)"
          : "0 4px 20px rgba(0,0,0,0.08)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        border: "1px solid #e8f0e8",
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
        <img
          src={item.type === "video" ? item.thumb : item.thumb}
          alt={item.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />

        {/* Video play overlay */}
        {item.type === "video" && (
          <div style={{
            position: "absolute", inset: 0,
            background: "rgba(0,0,0,0.35)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{
              width: 56, height: 56,
              background: "rgba(255,255,255,0.9)",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22,
            }}>
              ▶
            </div>
          </div>
        )}

        {/* Category badge */}
        <span style={{
          position: "absolute", top: 12, left: 12,
          background: "#2d7a2d",
          color: "#fff",
          fontSize: 11,
          fontWeight: 700,
          padding: "4px 10px",
          borderRadius: 50,
          letterSpacing: 0.5,
          textTransform: "uppercase",
        }}>
          {item.type === "video" ? "🎬 " : "📷 "}{item.category}
        </span>
      </div>

      {/* Card body */}
      <div style={{ padding: "20px 22px 24px" }}>
        <h3 style={{
          margin: "0 0 8px",
          fontSize: 17,
          fontWeight: 700,
          color: "#1a4a1a",
        }}>
          {item.title}
        </h3>
        <p style={{
          margin: 0,
          fontSize: 14,
          color: "#555",
          lineHeight: 1.65,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
          {item.description}
        </p>
        <div style={{
          marginTop: 14,
          fontSize: 13,
          color: "#2d7a2d",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}>
          {item.type === "video" ? "Watch Video" : "View Photo"} →
        </div>
      </div>
    </div>
  );
}

/* ── Lightbox Component  */
function Lightbox({ item, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0,
        background: "rgba(0,0,0,0.88)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 20,
          maxWidth: 800,
          width: "100%",
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
{/* Media */}
{item.type === "image" ? (
  <img
    src={item.src}
    alt={item.title}
    style={{
      width: "100%",
      maxHeight: 420,
      objectFit: "cover",
      display: "block",
    }}
  />
) : (
  <video
    controls
    autoPlay
    style={{
      width: "100%",
      maxHeight: "500px",
      display: "block",
      background: "#000",
    }}
  >
    <source src={item.src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
)}
        {/* Text */}
        <div style={{ padding: "24px 28px 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "#1a4a1a" }}>
              {item.title}
            </h2>
            <button
              onClick={onClose}
              style={{
                background: "#f0f0f0",
                border: "none",
                borderRadius: "50%",
                width: 36, height: 36,
                fontSize: 18,
                cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                marginLeft: 16,
              }}
            >
              ✕
            </button>
          </div>
          <span style={{
            display: "inline-block",
            marginTop: 8,
            background: "#e8f5e8",
            color: "#2d7a2d",
            fontSize: 12,
            fontWeight: 700,
            padding: "3px 12px",
            borderRadius: 50,
            textTransform: "uppercase",
            letterSpacing: 0.5,
          }}>
            {item.category}
          </span>
          <p style={{ marginTop: 16, fontSize: 15, color: "#444", lineHeight: 1.8 }}>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
} jsx