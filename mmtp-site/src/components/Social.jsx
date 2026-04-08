import React from 'react';
import { motion } from "framer-motion";

const Social = () => {
  return (
    <div className='social-sec'>
        <motion.h2
        className="subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        >
            Let's Connect...
        </motion.h2>

        <motion.div
        className="SocialContainer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        >
            <motion.div
            className="SocialContainer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            >
                <a href="">
                    <img src="./linkedin-svgrepo-com.svg" alt="" className="social-icon"/>
                </a>
                
            </motion.div>

            <motion.div
            className="SocialContainer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            >
                <a href="">
                    <img src="./instagram-svgrepo-com.svg" alt="" className="social-icon"/>
                </a>
                
            </motion.div>

            <motion.div
            className="SocialContainer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            >
                <a href="">
                    <img src="./email-svgrepo-com.svg" alt="" className="social-icon"/>
                </a>
                
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Social
