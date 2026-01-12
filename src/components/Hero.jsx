import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-coffee-secondary mb-4">
        Smart Coffee Ecosystem
      </h1>
      <p className="text-xl max-w-2xl mx-auto text-coffee-accent mb-8">
        Инновационный подход к кофейному опыту с IoT и персонализацией
      </p>
      <button className="bg-coffee-secondary text-coffee-primary px-6 py-3 rounded-full hover:scale-105 transition">
        Explore Menu
      </button>
    </motion.section>
  )
}

export default Hero