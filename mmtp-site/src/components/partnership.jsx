import React from 'react'
import { motion } from "framer-motion";

const partnership = () => {
  return (
    <div className='Partnership'>
      <motion.div
        className="part-sec"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.p
        className="subtitle part-sub"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        >
            Brought to you by,
        </motion.p>
        
        <a>
            <img className='mehha-logo' src="./MEHHA-original-version-logo-transparent.png" alt="" />
        </a>
      </motion.div>
    </div>
  )
}

export default partnership
