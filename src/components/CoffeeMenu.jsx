import React from 'react'
import { motion } from 'framer-motion'

function CoffeeMenu() {
  const coffeeItems = [
    { name: 'Эспрессо', price: 120, description: 'Классический интенсивный кофе' },
    { name: 'Латте', price: 180, description: 'Нежный кофейный напиток' },
    { name: 'Американо', price: 140, description: 'Легкий и бодрящий' }
  ]

  return (
    <section id="menu" className="py-16 bg-coffee-secondary/10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-coffee-secondary">Наше Меню</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {coffeeItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-coffee-primary p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold text-coffee-secondary">{item.name}</h3>
              <p className="text-coffee-accent mb-2">{item.description}</p>
              <div className="text-2xl font-bold text-coffee-secondary">{item.price} ₽</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoffeeMenu