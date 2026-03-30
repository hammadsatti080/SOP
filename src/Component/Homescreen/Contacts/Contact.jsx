/*import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on typing
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    return newErrors;
  };
/ya wla n/
 /* const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMsg("");
    } else {
      
      console.log("Form submitted:", formData);
      setSuccessMsg("Your message has been sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };
  */
 /*
 const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    setSuccessMsg("");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      setSuccessMsg("Message sent successfully ✅");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({});
    } else {
      setSuccessMsg("Something went wrong ❌");
    }

  } catch (error) {
    console.log(error);
    setSuccessMsg("Server error ❌");
  }
};
  return (
    <section className="contact-section py-5">
      <div className="container">
        <div className="row mb-4 text-center">
          <div className="col-12">
            <h2 className="fw-bold">Contact Us</h2>
            <p className="text-muted">
              Have a question or want to reach us? Fill out the form below.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="card p-4">
              {successMsg && (
                <div className="alert alert-success">{successMsg}</div>
              )}
              <form onSubmit={handleSubmit} noValidate>
           
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name <span style={{color : "red"}}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

              
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email <span style={{color : "red"}}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

               
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject <span style={{color : "red"}}>*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && (
                    <div className="invalid-feedback">{errors.subject}</div>
                  )}
                </div>

               
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message <span style={{color : "red"}}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  */
 import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMsg("");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessMsg("Message sent successfully ✅");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        console.log("Backend error:", data.error);
        setSuccessMsg("Something went wrong ❌");
      }

    } catch (error) {
      console.log(error);
      setSuccessMsg("Server error ❌");
    }
  };

  return (
    <section className="contact-section py-5">
      <div className="container">
        <div className="row mb-4 text-center">
          <div className="col-12">
            <h2 className="fw-bold">Contact Us</h2>
            <p className="text-muted">
              Have a question or want to reach us? Fill out the form below.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="card p-4">
              {successMsg && (
                <div className="alert alert-success">{successMsg}</div>
              )}
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message <span style={{ color: "red" }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}