import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";

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

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="form-header">
            <h2 className="title">Apply to MMTP</h2>
            <p className="subtitle">
              Join a program focused on real-world trade, strategy, and execution.
            </p>
          </div>

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
              >

                {/* Inputs with animation */}
                {["name", "email"].map((field) => (
                  <motion.input
                    key={field}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    placeholder={field === "name" ? "Full Name" : "Email Address"}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                ))}

                <motion.select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                >
                  <option value="">Select Team</option>
                  <option value="Research - Import">Research (Import)</option>
                  <option value="Research - Export">Research (Export)</option>
                  <option value="Creative">Creative & Design</option>
                  <option value="Operations">Operations</option>
                </motion.select>

                <motion.textarea
                  name="message"
                  placeholder="Why do you want to join MMTP?"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                />

                <motion.button
                  className="btn primary"
                  disabled={loading}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.03 }}
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </motion.button>

              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}