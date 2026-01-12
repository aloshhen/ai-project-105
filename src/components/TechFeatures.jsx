import React from 'react'
import { motion } from 'framer-motion'

function TechFeatures() {
  const features = [
    { title: 'IoT Кружки', description: 'Умные кружки с температурным контролем' },
    { title: 'Мобильное Приложение', description: 'Персонализированный кофейный опыт' },
    { title: 'Автоматизация', description: 'Роботизированная кофейня будущего' }
  ]

  return (
    <section id="tech" className="py-16 bg-coffee-primary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-coffee-secondary">Технологии</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.3 }}
              className="bg-coffee-secondary/10 p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold text-coffee-secondary mb-4">{feature.title}</h3>
              <p className="text-coffee-accent">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechFeatures