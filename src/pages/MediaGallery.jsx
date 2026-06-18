import h1Img from "../assets/h1.jpg";
import h2Img from "../assets/h2.png";

import v1Img from "../assets/v1.jpg";
import v2Img from "../assets/v2.jpg";
import v3Img from "../assets/v3.png";

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

function MediaGallery() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#2c3e50",
        }}
      >
        Media Gallery
      </h1>

      {/* h1 & h2 images */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <img
          src={h1Img}
          alt="Farm Highlight 1"
          style={{
            width: "48%",
            minWidth: "300px",
            height: "350px",
            objectFit: "cover",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        />

        <img
          src={h2Img}
          alt="Farm Highlight 2"
          style={{
            width: "48%",
            minWidth: "300px",
            height: "350px",
            objectFit: "cover",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        />
      </div>

      <h2
        style={{
          textAlign: "center",
          margin: "50px 0 30px",
          color: "#2c3e50",
        }}
      >
        Farm Moments
      </h2>

      {/* v1 v2 v3 images */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {[v1Img, v2Img, v3Img].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Farm Moment ${index + 1}`}
            style={{
              width: "31%",
              minWidth: "250px",
              height: "260px",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          />
        ))}
      </div>

      <h2
        style={{
          textAlign: "center",
          margin: "50px 0 30px",
          color: "#2c3e50",
        }}
      >
        Farm Videos
      </h2>

      {/* videos */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <video
          controls
          style={{
            width: "48%",
            height:"500px",
            minWidth: "320px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          <source src={video1} type="video/mp4" />
        </video>

        <video
          controls
          style={{
            width: "48%",
            height:"500px",
            minWidth: "320px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default MediaGallery;