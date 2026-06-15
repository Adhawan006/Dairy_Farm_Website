import milkImg from "../assets/milk.jpg";
import gheeImg from "../assets/ghee.jpg";
import paneerImg from "../assets/paneer.jpg";
import curdImg from "../assets/curd.png";import ProductCard from "../components/ProductCard";

function Products() {
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

  <button className="quality-btn">
    📄 Download Quality Report
  </button>
</div>
  </div>
);
}

export default Products;






