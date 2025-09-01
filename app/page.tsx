'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import About from '@/components/About'
import Reviews from '@/components/Reviews'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Navbar from '@/components/Navbar'
import Catering from '@/components/Catering'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Menu />
      <About />
      <Catering />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
} 