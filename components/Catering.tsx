'use client'

import { motion } from 'framer-motion'
import { UtensilsCrossed, Phone, Mail, CalendarCheck2, CheckCircle2 } from 'lucide-react'

export default function Catering() {
  return (
    <section id="catering" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Catering Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            From intimate gatherings to grand celebrations, we craft delicious menus and seamless service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {[ 
            { title: 'Events We Serve', desc: 'Weddings, birthdays, corporate events, house parties, festivals, and more.' },
            { title: 'Flexible Menus', desc: 'Authentic Indian and popular Chinese selections tailored to your taste and budget.' },
            { title: 'End-to-End Service', desc: 'Delivery, setup, live counters, and on-site staff available on request.' },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10"
        >
          <div className="flex-1 w-full">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-3">
              Plan Your Perfect Event
            </h3>
            <p className="text-gray-700 mb-4 sm:mb-6">
              Share your date, guest count, and preferences. We will respond with a customized menu and quote.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              {[ 'Veg and Non-Veg options', 'Live counters on request', 'Bulk and subscription orders', 'Hygienic preparation and timely delivery' ].map(point => (
                <li key={point} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:max-w-sm bg-white rounded-xl p-5 sm:p-6 shadow border border-gray-100">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Book Catering</h4>
            <div className="space-y-3">
              <a href="tel:9392333733" className="flex items-center gap-3 p-3 rounded-lg border hover:border-primary-300 hover:bg-primary-50 transition-colors">
                <Phone className="w-5 h-5 text-primary-600" />
                <span className="text-gray-800">Call: 9392333733</span>
              </a>
              <a href="mailto:srimanikyambarestaurant@gmail.com?subject=Catering%20Inquiry&body=Hello%2C%20I%27d%20like%20to%20book%20catering.%20Event%20date%3A%20%5Bdd-mm-yyyy%5D%2C%20Guests%3A%20%5Bnumber%5D%2C%20Notes%3A%20%5Bany%5D." className="flex items-center gap-3 p-3 rounded-lg border hover:border-primary-300 hover:bg-primary-50 transition-colors">
                <Mail className="w-5 h-5 text-primary-600" />
                <span className="text-gray-800">Email: srimanikyambarestaurant@gmail.com</span>
              </a>
              <a href="#contact" className="flex items-center gap-3 p-3 rounded-lg border hover:border-primary-300 hover:bg-primary-50 transition-colors">
                <CalendarCheck2 className="w-5 h-5 text-primary-600" />
                <span className="text-gray-800">Use reservation form below</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



