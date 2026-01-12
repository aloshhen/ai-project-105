import React from 'react'

function Footer() {
  return (
    <footer className="bg-coffee-primary/80 py-8 text-center">
      <div className="container mx-auto">
        <p className="text-coffee-secondary">© 2024 CoffeeIO. Все права защищены.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-coffee-accent hover:text-white">Политика конфиденциальности</a>
          <a href="#" className="text-coffee-accent hover:text-white">Условия использования</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer