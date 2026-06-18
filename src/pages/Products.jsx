import React, { useState } from "react";
import milkImg from "../assets/milk.jpg";
import gheeImg from "../assets/ghee.jpg";
import paneerImg from "../assets/paneer.jpg";
import curdImg from "../assets/curd.png";
import qualityReport from "../assets/quality-report.jpg";
import ProductCard from "../components/ProductCard";

function Products() {
  const [showModal, setShowModal] = useState(false);

  const products = [
    {
      name: "🥛 Fresh Milk",
      description: "Fresh farm milk collected daily from healthy dairy cows.",
      image: milkImg,
    },
    {
      name: "🫙 Ghee",
      description: "Pure homemade desi ghee prepared using traditional methods.",
      image: gheeImg,
    },
    {
      name: "🧀 Paneer",
      description: "Fresh paneer rich in protein and perfect for daily meals.",
      image: paneerImg,
    },
    {
      name: "🥣 Curd",
      description: "Natural set curd with a smooth texture and authentic taste.",
      image: curdImg,
    },
  ];

  return (
    <>
      {/* Quality Report Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "90%",
              maxHeight: "90%",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: "-15px",
                right: "-15px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "none",
                background: "#fff",
                fontSize: "24px",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              ×
            </button>

            <img
              src={qualityReport}
              alt="Quality Report"
              style={{
                maxWidth: "100%",
                maxHeight: "85vh",
                borderRadius: "10px",
                boxShadow: "0 0 20px rgba(255,255,255,0.3)",
              }}
            />
          </div>
        </div>
      )}

      <div className="products-container">
        <h1>Fresh Dairy Products</h1>

        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>

        <div className="quality-section">
          <h2>Quality & Safety Standards</h2>

          <ul>
            <li>✓ FSSAI Certified</li>
            <li>✓ Lab Tested</li>
            <li>✓ Hygienic Processing</li>
            <li>✓ Fresh Daily Production</li>
          </ul>

          <button
            className="quality-btn"
            onClick={() => setShowModal(true)}
          >
            📄 Download Quality Report
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;