import "./App.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Structure from "./components/Structure";
import Benefits from "./components/Benefits";
import Vision from "./components/Vision";
import ApplicationForm from "./components/ApplicationForm";

import ScrollReveal from "./components/ScrollReveal";
import { useScroll, motion } from "framer-motion";
import Social from "./components/Social.jsx";
import Partnership from "./components/partnership.jsx";
import Footer from "./components/footer.jsx";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
    {/* Progress bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0%",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "var(--gradient-accent)",
          zIndex: 9999,
        }}
      />
      
      <Hero />

      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><Structure /></ScrollReveal>
      <ScrollReveal><Benefits /></ScrollReveal>
      <ScrollReveal><Vision /></ScrollReveal>
      <ScrollReveal><Social /></ScrollReveal>
      <ScrollReveal><Partnership /></ScrollReveal>
      <ScrollReveal><ApplicationForm /></ScrollReveal>
      <Footer />
    </>
  );
}

export default App;