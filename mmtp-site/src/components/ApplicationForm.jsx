import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ApplicationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "applications"), {
        ...form,
        createdAt: new Date()
      });

      setSuccess(true);
      setForm({ name: "", email: "", interest: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section className="section form-section">
      <div className="container form-container">
        
        <div className="form-header">
          <h2 className="title">Apply to MMTP</h2>
          <p className="subtitle">
            Join a program focused on real-world trade, strategy, and execution.
          </p>
        </div>

        {success ? (
          <div className="success-box">
            <h3>Application Submitted</h3>
            <p>We’ll review your application and get back to you.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <select
              name="interest"
              value={form.interest}
              onChange={handleChange}
              required
            >
              <option value="">Select Team</option>
              <option value="Research - Import">Research (Import)</option>
              <option value="Research - Export">Research (Export)</option>
              <option value="Creative">Creative & Design</option>
              <option value="Operations">Operations</option>
            </select>

            <textarea
              name="message"
              placeholder="Why do you want to join MMTP?"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button className="btn btn-primary" disabled={loading}>
              {loading ? "Submitting..." : "Submit Application"}
            </button>

          </form>
        )}
      </div>
    </section>
  );
}