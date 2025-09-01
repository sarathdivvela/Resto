'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Flame } from 'lucide-react'
import Image from 'next/image'

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image: string
  spiceLevel: number
  category: 'indian' | 'chinese'
  popular?: boolean
}

const menuItems: MenuItem[] = [
  // Indian Dishes
  {
    id: 1,
    name: 'Butter Chicken',
    description: 'Tender chicken in rich tomato and butter gravy',
    price: '₹280',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    spiceLevel: 2,
    category: 'indian',
    popular: true
  },
  {
    id: 2,
    name: 'Biryani',
    description: 'Fragrant basmati rice with tender meat and aromatic spices',
    price: '₹320',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    spiceLevel: 3,
    category: 'indian',
    popular: true
  },
  {
    id: 3,
    name: 'Paneer Tikka',
    description: 'Grilled cottage cheese with Indian spices',
    price: '₹220',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    spiceLevel: 2,
    category: 'indian'
  },
  {
    id: 4,
    name: 'Dal Makhani',
    description: 'Creamy black lentils slow-cooked to perfection',
    price: '₹180',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    spiceLevel: 1,
    category: 'indian'
  },
  {
    id: 5,
    name: 'Naan',
    description: 'Soft and fluffy Indian bread',
    price: '₹40',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    spiceLevel: 0,
    category: 'indian'
  },
  {
    id: 6,
    name: 'Raita',
    description: 'Cooling yogurt with cucumber and mint',
    price: '₹60',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    spiceLevel: 0,
    category: 'indian'
  },
  // Chinese Dishes
  {
    id: 7,
    name: 'Chicken Fried Rice',
    description: 'Stir-fried rice with chicken and vegetables',
    price: '₹240',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    spiceLevel: 1,
    category: 'chinese',
    popular: true
  },
  {
    id: 8,
    name: 'Chilli Chicken',
    description: 'Spicy chicken with green chillies and soy sauce',
    price: '₹280',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    spiceLevel: 3,
    category: 'chinese',
    popular: true
  },
  {
    id: 9,
    name: 'Veg Noodles',
    description: 'Stir-fried noodles with fresh vegetables',
    price: '₹200',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    spiceLevel: 1,
    category: 'chinese'
  },
  {
    id: 10,
    name: 'Manchurian',
    description: 'Crispy vegetable balls in spicy sauce',
    price: '₹220',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    spiceLevel: 2,
    category: 'chinese'
  },
  {
    id: 11,
    name: 'Spring Rolls',
    description: 'Crispy rolls filled with vegetables',
    price: '₹160',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    spiceLevel: 0,
    category: 'chinese'
  },
  {
    id: 12,
    name: 'Sweet & Sour',
    description: 'Tangy sauce with vegetables and choice of protein',
    price: '₹260',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    spiceLevel: 1,
    category: 'chinese'
  }
]

export default function Menu() {
  const [activeTab, setActiveTab] = useState<'indian' | 'chinese'>('indian')
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  const filteredItems = menuItems.filter(item => item.category === activeTab)

  const SpiceLevel = ({ level }: { level: number }) => (
    <div className="flex items-center space-x-1">
      {[1, 2, 3].map((i) => (
        <Flame
          key={i}
          className={`w-3 h-3 sm:w-4 sm:h-4 ${
            i <= level ? 'text-red-500 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )

  return (
    <section id="menu" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Discover our fusion of authentic Indian flavors and popular Chinese dishes
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 sm:mb-12 px-4 sm:px-0"
        >
          <div className="bg-white rounded-xl p-1.5 shadow-lg w-full max-w-sm">
            {(['indian', 'chinese'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-base w-1/2 ${
                  activeTab === tab
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-primary-500'
                }`}
              >
                {tab === 'indian' ? '🍛 Indian' : '🥢 Chinese'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer relative"
                onClick={() => setSelectedItem(item)}
              >
                {/* Popular Badge */}
                {item.popular && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className="bg-primary-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span className="hidden sm:inline">Popular</span>
                      <span className="sm:hidden">★</span>
                    </div>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                    <span className="text-2xl font-bold text-primary-600">{item.price}</span>
                  </div>
                  
                  <p className="text-base text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <SpiceLevel level={item.spiceLevel} />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors text-base shadow-md"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View Full Menu Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
          >
            View Full Menu
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 