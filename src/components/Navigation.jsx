import React from 'react'

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-coffee-primary/80 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-2xl font-bold text-coffee-secondary">CoffeeIO</div>
        <ul className="flex space-x-4">
          <li><a href="#menu" className="text-coffee-accent hover:text-white">Меню</a></li>
          <li><a href="#tech" className="text-coffee-accent hover:text-white">Технологии</a></li>
          <li><a href="#about" className="text-coffee-accent hover:text-white">О нас</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation