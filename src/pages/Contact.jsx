function Contact() {
  const contactDetails = [
    {
      title: "Call Us",
      detail: "+91 98765 43210",
      description: "Speak with our dairy team for orders and delivery details.",
    },
    {
      title: "Email Us",
      detail: "info@dairyfarm.com",
      description: "Send product questions, bulk order requests, or feedback.",
    },
    {
      title: "Visit Farm",
      detail: "Green Valley Dairy Farm",
      description: "Come by for fresh dairy products and farm assistance.",
    },
  ];

  return (
    <div className="products-container contact-container">
      <h1>Contact Our Dairy Farm</h1>

      <div className="products-grid contact-grid">
        {contactDetails.map((item, index) => (
          <div className="product-card contact-card" key={index}>
            <h3>{item.title}</h3>
            <strong>{item.detail}</strong>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="quality-section contact-section">
        <h2>Get In Touch</h2>

        <ul>
          <li>Open daily from 7:00 AM to 8:00 PM</li>
          <li>Fresh product orders accepted every morning</li>
          <li>Home delivery available for nearby areas</li>
          <li>Bulk orders available for events and stores</li>
        </ul>

        <button className="quality-btn">Send Message</button>
      </div>
    </div>
  );
}

export default Contact;
