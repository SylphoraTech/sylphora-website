import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Send us a message</h2>
        <form action="#" method="POST">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              aria-label="Your name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              aria-label="Your email"
            />
          </div>
          <div className="form-group">
            <input type="tel" name="phone" placeholder="Phone #" aria-label="Phone number" />
            <input
              type="text"
              name="company"
              placeholder="Company name"
              aria-label="Company name"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Write your message"
              required
              aria-label="Message"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            SEND MESSAGE
          </button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>We're open for suggestions or just to have a chat</p>
        <p>📍 39/1B Pune, 411038</p>
        <p>📞 +91 1234567890</p>
        <p>
          📧 <a href="mailto:Sylphora.pvt@gmail.com">Sylphora.pvt@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
