// function Home() {
// const products = [
// { id: 1, name: “Fresh Milk”, icon: “🥛” },
// { id: 2, name: “Pure Butter”, icon: “🧈” },
// { id: 3, name: “Paneer”, icon: “🧀” },
// { id: 4, name: “Curd”, icon: “🥣” },
// { id: 5, name: “Desi Ghee”, icon: “✨” },
// ];

// const features = [
// “100% Organic”,
// “Farm Fresh Products”,
// “No Preservatives”,
// “Rich in Nutrition”,
// “Direct Farm Delivery”,
// ];

// return (
// <div
// style={{
// maxWidth: “1000px”,
// margin: “0 auto”,
// padding: “30px”,
// fontFamily: “Arial, sans-serif”,
// }}
// >
// <div
// style={{
// background: “linear-gradient(135deg, #E8F5E9, #FFFFFF)”,
// padding: “50px 30px”,
// borderRadius: “15px”,
// textAlign: “center”,
// marginBottom: “40px”,
// }}
// >
// <h1
// style={{
// color: “#2E7D32”,
// fontSize: “42px”,
// marginBottom: “15px”,
// }}
// >
// Fresh Organic Dairy Products
//     <p
//       style={{
//         fontSize: "18px",
//         color: "#555",
//         lineHeight: "1.8",
//         maxWidth: "700px",
//         margin: "0 auto",
//       }}
//     >
//       Welcome to our Dairy Farm. We provide fresh, healthy, and organic
//       dairy products directly from our farm to your home. Quality,
//       purity, and customer satisfaction are our highest priorities.
//     </p>
//   </div>
//   <section style={{ marginBottom: "50px" }}>
//     <h2
//       style={{
//         textAlign: "center",
//         color: "#2E7D32",
//         marginBottom: "25px",
//       }}
//     >
//       Our Products
//     </h2>
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         flexWrap: "wrap",
//         gap: "20px",
//       }}
//     >
//       {products.map((product) => (
//         <div
//           key={product.id}
//           style={{
//             backgroundColor: "#fff",
//             borderRadius: "12px",
//             padding: "20px",
//             minWidth: "170px",
//             textAlign: "center",
//             boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//           }}
//         >
//           <h3 style={{ fontSize: "22px" }}>
//             {product.icon}
//           </h3>
//           <p
//             style={{
//               fontWeight: "bold",
//               marginTop: "10px",
//             }}
//           >
//             {product.name}
//           </p>
//         </div>
//       ))}
//     </div>
//   </section>
//   <section
//     style={{
//       backgroundColor: "#E8F5E9",
//       padding: "25px",
//       borderRadius: "12px",
//       marginBottom: "40px",
//     }}
//   >
//     <h2
//       style={{
//         textAlign: "center",
//         color: "#2E7D32",
//       }}
//     >
//       Why Choose Us?
//     </h2>
//     <ul
//       style={{
//         listStyle: "none",
//         padding: 0,
//         textAlign: "center",
//         fontSize: "17px",
//       }}
//     >
//       {features.map((feature, index) => (
//         <li key={index} style={{ margin: "12px 0" }}>
//           ✅ {feature}
//         </li>
//       ))}
//     </ul>
//   </section>
//   <section
//     style={{
//       backgroundColor: "#F9FFF9",
//       borderLeft: "5px solid #2E7D32",
//       padding: "25px",
//       borderRadius: "10px",
//       marginBottom: "40px",
//     }}
//   >
//     <h2 style={{ color: "#2E7D32" }}>
//       Our Mission
//     </h2>
//     <p
//       style={{
//         color: "#555",
//         lineHeight: "1.8",
//       }}
//     >
//       Our mission is to deliver healthy, natural, and chemical-free
//       dairy products while supporting sustainable farming practices
//       and ensuring customer satisfaction.
//     </p>
//   </section>
//   <div style={{ textAlign: "center" }}>
//     <button
//       style={{
//         padding: "14px 30px",
//         backgroundColor: "#2E7D32",
//         color: "white",
//         border: "none",
//         borderRadius: "8px",
//         fontSize: "16px",
//         fontWeight: "bold",
//         cursor: "pointer",
//         boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
//       }}
//     >
//       Explore Products
//     </button>
//   </div>
// </div>

// );
// }

// export default Home; 

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
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #E8F5E9, #FFFFFF)",
          padding: "50px 30px",
          borderRadius: "15px",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            color: "#2E7D32",
            fontSize: "42px",
            marginBottom: "15px",
          }}
        >
          Fresh Organic Dairy Products
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            lineHeight: "1.8",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          Welcome to our Dairy Farm. We provide fresh, healthy, and organic
          dairy products directly from our farm to your home. Quality, purity,
          and customer satisfaction are our highest priorities.
        </p>
      </div>

      <section style={{ marginBottom: "50px" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#2E7D32",
            marginBottom: "25px",
          }}
        >
          Our Products
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "20px",
                minWidth: "170px",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ fontSize: "22px" }}>{product.icon}</h3>

              <p
                style={{
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                {product.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#E8F5E9",
          padding: "25px",
          borderRadius: "12px",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#2E7D32",
          }}
        >
          Why Choose Us?
        </h2>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            textAlign: "center",
            fontSize: "17px",
          }}
        >
          {features.map((feature, index) => (
            <li key={index} style={{ margin: "12px 0" }}>
              ✅ {feature}
            </li>
          ))}
        </ul>
      </section>

      <section
        style={{
          backgroundColor: "#F9FFF9",
          borderLeft: "5px solid #2E7D32",
          padding: "25px",
          borderRadius: "10px",
          marginBottom: "40px",
        }}
      >
        <h2 style={{ color: "#2E7D32" }}>Our Mission</h2>

        <p
          style={{
            color: "#555",
            lineHeight: "1.8",
          }}
        >
          Our mission is to deliver healthy, natural, and chemical-free dairy
          products while supporting sustainable farming practices and ensuring
          customer satisfaction.
        </p>
      </section>

      <div style={{ textAlign: "center" }}>
        <button
          style={{
            padding: "14px 30px",
            backgroundColor: "#2E7D32",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
          }}
        >
          Explore Products
        </button>
      </div>
    </div>
  );
}

export default Home;