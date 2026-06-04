function Home() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Fresh Organic Dairy Products</h1>

      <p>
        Welcome to our Dairy Farm. We provide fresh, healthy and organic
        dairy products directly from our farm to your home.
      </p>

      <h2>Our Products</h2>

      <div>
        <p>🥛 Fresh Milk</p>
        <p>🧈 Pure Butter</p>
        <p>🧀 Paneer</p>
        <p>🍶 Curd</p>
        <p>✨ Desi Ghee</p>
      </div>

      <h2>Why Choose Us?</h2>

      <ul style={{ listStyle: "none" }}>
        <li>✅ 100% Organic</li>
        <li>✅ Farm Fresh</li>
        <li>✅ No Preservatives</li>
        <li>✅ Healthy & Nutritious</li>
      </ul>

      <button>Explore Products</button>
    </div>
  );
}

export default Home;