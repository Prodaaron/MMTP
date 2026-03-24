import "./Hero.css";
import TradeLines from "./TradeLines";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <TradeLines />
      <div className="hero-content container">
        <h1 className="hero-title">
          MMTP Student Program
        </h1>

        <p className="hero-subtitle">
          A new generation of students learning real-world trade, business, and execution.
        </p>

        <div className="hero-buttons">
          <button className="btn primary">Apply Now</button>
          <button className="btn secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
}