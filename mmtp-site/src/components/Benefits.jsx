import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Benefits() {
  const data = [
    {
      title: "Real Experience",
      text: "Work on actual business concepts and strategies.",
    },
    {
      title: "Global Perspective",
      text: "Understand how international markets operate.",
    },
    {
      title: "Skill Development",
      text: "Build research, teamwork, and execution skills.",
    },
  ];

  return (
    <section className="section">
      <div className="container">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="title" variants={item}>
            What You Gain
          </motion.h2>

          <motion.div className="grid-3" variants={container}>
            {data.map((card, i) => (
              <motion.div
                key={i}
                className="card"
                variants={item}
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 180 }}
              >
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}