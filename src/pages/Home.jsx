function Home() {
  const products = [
    { id: 1, name: "Fresh Milk", icon: "🥛" },
    { id: 2, name: "Pure Butter", icon: "🧈" },
    { id: 3, name: "Paneer", icon: "🧀" },
    { id: 4, name: "Curd", icon: "🥣" },
    { id: 5, name: "Desi Ghee", icon: "✨" },
  ];

  const features = [
    "100% Organic",
    "Farm Fresh Products",
    "No Preservatives",
    "Rich in Nutrition",
    "Direct Farm Delivery",
  ];

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "30px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Fresh Organic Dairy Products</h1>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.6",
          marginBottom: "30px",
        }}
      >
        Welcome to our Dairy Farm. We provide fresh and organic dairy
        products directly from our farm to your home. Quality, purity,
        and customer satisfaction are our top priorities.
      </p>

      <section style={{ marginBottom: "35px" }}>
        <h2>Our Products</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                minWidth: "150px",
              }}
            >
              <h3>
                {product.icon} {product.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "35px" }}>
        <h2>Why Choose Us?</h2>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            fontSize: "17px",
          }}
        >
          {features.map((feature, index) => (
            <li key={index} style={{ margin: "10px 0" }}>
              ✅ {feature}
            </li>
          ))}
        </ul>
      </section>

      <section
        style={{
          backgroundColor: "#f8f8f8",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "30px",
        }}
      >
        <h2>Our Mission</h2>

        <p>
          Our mission is to deliver healthy, natural, and chemical-free
          dairy products while supporting sustainable farming practices.
        </p>
      </section>

      <button
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Explore Products
      </button>
    </div>
  );
}

export default Home;