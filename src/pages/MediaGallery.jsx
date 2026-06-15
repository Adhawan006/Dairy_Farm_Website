import milkImg from "../assets/milk.jpg";
import gheeImg from "../assets/ghee.jpg";
import paneerImg from "../assets/paneer.jpg";
import curdImg from "../assets/curd.png";

function MediaGallery() {
  const galleryItems = [
    {
      title: "Fresh Milk Collection",
      description: "Daily milk collection from healthy dairy cows.",
      image: milkImg,
    },
    {
      title: "Pure Ghee Preparation",
      description: "Traditional preparation process for rich homemade ghee.",
      image: gheeImg,
    },
    {
      title: "Paneer Production",
      description: "Fresh paneer made with clean and hygienic methods.",
      image: paneerImg,
    },
    {
      title: "Natural Curd",
      description: "Smooth curd prepared fresh for everyday dairy needs.",
      image: curdImg,
    },
  ];

  return (
    <div className="products-container media-container">
      <h1>Media Gallery</h1>

      <div className="products-grid media-grid">
        {galleryItems.map((item, index) => (
          <div className="product-card media-card" key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="quality-section media-section">
        <h2>Farm Moments</h2>

        <ul>
          <li>Daily dairy production highlights</li>
          <li>Fresh product preparation photos</li>
          <li>Clean and hygienic farm process</li>
          <li>Healthy farm-to-home dairy journey</li>
        </ul>

        <button className="quality-btn">View More Photos</button>
      </div>
    </div>
  );
}

export default MediaGallery;
