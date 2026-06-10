import "./About.css";

import poster from "../assets/poster.jpg";
import cowFeeding from "../assets/cow-feeding.jpg";
import farm1 from "../assets/farm1.jpg";
import farm2 from "../assets/farm2.jpg";
import qualityReport from "../assets/quality-report.jpg";

function About() {
  return (
    <>

      <div
        style={{
          padding: "40px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h1>About Shree Shyam Dairy</h1>

        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            marginBottom: "20px",
          }}
        >
          Pure Milk. Pure Trust.
        </p>

        <img
          src={poster}
          alt="Shree Shyam Dairy"
          style={{
            width: "400px",
            maxWidth: "100%",
            display: "block",
            margin: "20px auto",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        />

        <hr />

        <section>
          <h2>Who We Are</h2>

          <p>
            Shree Shyam Dairy is committed to providing fresh, pure and
            nutritious cow milk. Our farm follows hygienic practices and focuses
            on animal welfare, quality assurance and customer satisfaction.
          </p>

          <img
            src={cowFeeding}
            alt="Healthy Cows"
            style={{
              width: "350px",
              maxWidth: "100%",
              borderRadius: "10px",
              marginTop: "15px",
            }}
          />
        </section>

        <section>
          <h2>Our Story</h2>

          <p>
            Our dairy farm was established with the vision of delivering fresh
            and healthy milk directly to families. We believe in ethical dairy
            farming, healthy cattle management and maintaining the highest
            quality standards.
          </p>
        </section>

        <section>
          <h2>Mission</h2>

          <p>
            To provide pure and healthy milk while maintaining the highest
            standards of quality, hygiene and customer trust.
          </p>
        </section>

        <section>
          <h2>Vision</h2>

          <p>
            To become a trusted dairy brand known for purity, freshness and
            ethical dairy farming practices.
          </p>
        </section>

        <section>
          <h2>Why Choose Us</h2>

          <ul>
            <li>Healthy Cows</li>
            <li>No Adulteration</li>
            <li>Quality Assurance</li>
            <li>Timely Delivery</li>
          </ul>
        </section>

        <section>
          <h2>Quality Assurance</h2>

          <p>
            Every batch of milk is tested and verified to ensure nutritional
            quality, safety and purity before reaching our customers.
          </p>

          <img
            src={qualityReport}
            alt="Quality Report"
            style={{
              width: "400px",
              maxWidth: "100%",
              borderRadius: "10px",
              marginTop: "15px",
            }}
          />
        </section>

        <section>
          <h2>Our Farm Gallery</h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <img
              src={farm1}
              alt="Farm 1"
              style={{
                width: "300px",
                height: "400px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <img
              src={farm2}
              alt="Farm 2"
              style={{
                width: "300px",
                height: "400px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
        </section>
      </div>

    </>
  );
}

export default About;
