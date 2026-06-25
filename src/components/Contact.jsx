import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:3001/contacts");
      setContacts(res.data);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/contacts",
        formData
      );

      const oldData =
        JSON.parse(localStorage.getItem("contacts")) || [];

      localStorage.setItem(
        "contacts",
        JSON.stringify([...oldData, response.data])
      );

      setContacts((prev) => [...prev, response.data]);

      alert("Data Saved Successfully");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Save Error:", error);
      alert("Data Save Failed");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <p className="contact-subtitle">GET IN TOUCH</p>

          <h2>
            Let's work <br />
            together
          </h2>

          <p className="contact-description">
            I'm a Full Stack Python Developer passionate about
            building modern web applications using React JS,
            Django, REST API and MySQL.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <span>📧</span>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=niteshgoswami72812@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                niteshgoswami72812@gmail.com
              </a>
            </div>

            <div className="info-item">
              <span>💼</span>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="info-item">
              <span>💻</span>
              <a
                href="https://github.com/niteshgoswami72812-create"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-group">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="input-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                required
              />
            </div>

            <div className="input-group">
              <label>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-btn">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;