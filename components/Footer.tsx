'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Catering', href: '#catering' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/srimanikyamba', color: 'hover:text-pink-500' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/srimanikyamba', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/srimanikyamba', color: 'hover:text-blue-400' },
  ]

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black animate-[gradientShift_12s_ease_infinite] opacity-95" />

      {/* Top wave divider */}
      <svg className="absolute -top-6 left-0 right-0 w-full h-8 text-gray-900" viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0,32 C240,64 480,0 720,16 C960,32 1200,64 1440,24 L1440,0 L0,0 Z" />
      </svg>

      <div className="relative container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/images/logo.png"
                alt="Sri Manikyamba Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              />
              <div>
                <h3 className="text-xl font-display font-bold">Sri Manikyamba</h3>
                <p className="text-sm text-gray-400">Restaurant</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience the perfect blend of authentic Indian cuisine and popular Chinese dishes. 
              Every dish tells a story of tradition and innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-colors ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a href="tel:9392333733" className="text-gray-300 hover:text-primary-400 transition-colors">
                  9392333733
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-primary-400 flex items-center justify-center font-bold text-lg">
                  ✉
                </div>
                <a
                  href="mailto:srimanikyambarestaurant@gmail.com"
                  className="text-gray-300 hover:text-primary-400 hover:underline transition-colors"
                >
                  srimanikyambarestaurant@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <a href="https://maps.google.com/?q=16.678015,82.163279" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-400 transition-colors">
                  M5H7+682 Muramalla, Andhra Pradesh
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">
                  Mon-Sun: 11:00 AM - 11:00 PM
                </span>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to get updates on new dishes and special offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */
        }
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sri Manikyamba Restaurant. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 items-center">
              <a href="mailto:srimanikyambarestaurant@gmail.com" className="text-gray-400 hover:text-primary-400 text-sm transition-colors min-w-0">
                <span className="break-all">Email Us</span>
              </a>
              <a href="tel:9392333733" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Call
              </a>
              <a href="https://maps.google.com/?q=16.678015,82.163279" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Find Us
              </a>
              <a href="#home" className="ml-2 text-gray-300 hover:text-white text-sm underline-offset-4 hover:underline transition-colors">
                Back to top ↑
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 
