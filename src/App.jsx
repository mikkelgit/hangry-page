import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BrandSection from './components/BrandSection'
import FoundOn from './components/FoundOn'
import BenefitsSection from './components/BenefitsSection'

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BrandSection />
      <FoundOn />
      <BenefitsSection />
    </div>
  )
}
