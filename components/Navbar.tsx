'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

interface NavbarProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
}

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Catering', href: '#catering' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 sm:space-x-3"
          >
            <img
              src="/images/logo.jpg"
              alt="Sri Manikyamba Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            />
            <div className="hidden sm:block">
              <h1 className={`text-lg sm:text-xl lg:text-2xl font-display font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                Sri Manikyamba
              </h1>
              <p className={`text-xs sm:text-sm ${scrolled ? 'text-gray-600' : 'text-white/80'}`}>Restaurant</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${scrolled ? 'text-gray-700 hover:text-primary-500' : 'text-white hover:text-white/80'} font-medium transition-colors duration-200 text-sm xl:text-base`}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <motion.a
              href="tel:9392333733"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 ${scrolled ? 'text-primary-600 hover:text-primary-700' : 'text-white hover:text-white/80'} font-medium text-sm xl:text-base`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">9392333733</span>
              <span className="xl:hidden">Call</span>
            </motion.a>
            <motion.a
              href="tel:9392333733"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-sm xl:text-base px-4 xl:px-6 py-2 xl:py-3"
            >
              Order Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-3 rounded-lg transition-colors ${scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="container-custom px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-700 hover:text-primary-500 font-medium py-4 px-3 transition-colors text-lg rounded-lg hover:bg-gray-50"
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="pt-6 border-t border-gray-200 space-y-4">
                <motion.a
                  href="tel:9392333733"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 text-primary-600 font-medium py-4 px-3 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  <span className="text-lg">9392333733</span>
                </motion.a>
                <motion.a
                  href="tel:9392333733"
                  whileHover={{ scale: 1.02 }}
                  className="btn-primary w-full py-4 text-lg font-semibold"
                >
                  Order Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
} 
