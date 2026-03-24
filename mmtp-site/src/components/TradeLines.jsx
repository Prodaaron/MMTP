import { motion } from "framer-motion";

export default function TradeLines() {
  return (
    <div className="trade-lines">

      {/* Line 1 */}
      <motion.svg
        viewBox="0 0 500 200"
        className="trade-line"
      >
        <motion.path
          d="M0 150 Q150 50 300 120 T500 60"
          fill="transparent"
          stroke="url(#gradient1)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <defs>
          <linearGradient id="gradient1">
            <stop offset="0%" stopColor="#7fbf4d" />
            <stop offset="100%" stopColor="#c8a96a" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Line 2 */}
      <motion.svg
        viewBox="0 0 500 200"
        className="trade-line delay"
      >
        <motion.path
          d="M0 180 Q200 100 350 140 T500 90"
          fill="transparent"
          stroke="rgba(127,191,77,0.4)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>

    </div>
  );
}