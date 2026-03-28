import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";

import "./ApplicationForm.css";

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
    <section className="form-section" id="applicationForm">
      <div className="form-wrapper">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* HEADER */}
          <div className="form-header">
            <h2>Apply to MMTP</h2>
            <p>
              Join a program focused on real-world trade, strategy, and execution.
            </p>
          </div>

          {/* FORM CARD */}
          <div className="form-card">

            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  className="success-box"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3>Application Submitted</h3>
                  <p>We’ll review your application and get back to you.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="form-fields"
                >

                  <div className="form-group">
                    <motion.input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <div className="form-group">
                    <motion.input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={handleChange}
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <div className="form-group">
                    <motion.textarea
                      name="message"
                      placeholder="Why do you want to join MMTP?"
                      rows="5"
                      value={form.message}
                      onChange={handleChange}
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.03 }}
                    className="submit-btn"
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </motion.button>

                </motion.form>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

      </div>
    </section>
  );
}