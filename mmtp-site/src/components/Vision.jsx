import { motion } from "framer-motion";
import "./vision.css"

export default function Vision() {
  return (
    <section className="section Vsec">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
        >
          <h2 className="title">Our Vision</h2>

          <div className="vision-card">
            <motion.p
            className="subtitle vsec-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            >
              “In high school, I missed oppotunites—not from lack of ability but from fear of judgment from my peers. Looking back, I realized how much growth comes from stepping forward, leading, and working with others. MMTP was created to ensure others don't miss those same opportunites. My vision is to make MMTP a global program where it's not late for students who are willing to do something meaningful. Let's make it happen together.”

              <motion.p
              className="subtitle vsec-text vsec-name"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              >
                — Aron M.
              </motion.p>

              

             
            </motion.p>
              

          <div className="vsec-profile">

          </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}