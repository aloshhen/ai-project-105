import React from 'react'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import CoffeeMenu from './components/CoffeeMenu'
import TechFeatures from './components/TechFeatures'
import Footer from './components/Footer'

function App() {
  return (
    <div className="twa-adaptive">
      <Navigation />
      <Hero />
      <CoffeeMenu />
      <TechFeatures />
      <Footer />
    </div>
  )
}

export default App