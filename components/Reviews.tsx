'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface Review {
  id: number
  name: string
  rating: number
  comment: string
  date: string
  avatar: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    rating: 5,
    comment: 'The best Indian restaurant I\'ve ever visited! The butter chicken is absolutely divine and the service is exceptional. Highly recommended!',
    date: '2 days ago',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 2,
    name: 'Rahul Kumar',
    rating: 5,
    comment: 'Amazing fusion of Indian and Chinese cuisines. The biryani is authentic and the Chinese dishes are perfectly spiced. Great value for money!',
    date: '1 week ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 3,
    name: 'Anjali Patel',
    rating: 4,
    comment: 'Loved the traditional Indian thali and the Chinese noodles. The restaurant has a warm atmosphere and the staff is very friendly.',
    date: '3 days ago',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    rating: 5,
    comment: 'Outstanding food quality and presentation. The paneer tikka and chilli chicken are my favorites. Will definitely visit again!',
    date: '5 days ago',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 5,
    name: 'Meera Reddy',
    rating: 5,
    comment: 'Perfect blend of traditional and modern flavors. The dal makhani is creamy and the spring rolls are crispy. Excellent service!',
    date: '1 week ago',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 6,
    name: 'Arjun Mehta',
    rating: 4,
    comment: 'Great place for family dinners. The portions are generous and the taste is authentic. Highly recommend the biryani!',
    date: '4 days ago',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  }
]

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center space-x-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`w-5 h-5 ${
          star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))}
  </div>
)

export default function Reviews() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their experience.
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            loop={true}
            className="reviews-swiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl p-6 shadow-lg h-full"
                >
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-4">
                    <StarRating rating={review.rating} />
                  </div>

                  {/* Comment */}
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    "{review.comment}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { value: '4.8', label: 'Average Rating' },
            { value: '2,500+', label: 'Happy Customers' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '15+', label: 'Years of Service' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Write a Review
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        .reviews-swiper .swiper-pagination-bullet {
          background: #f2751a;
        }
        .reviews-swiper .swiper-button-next,
        .reviews-swiper .swiper-button-prev {
          color: #f2751a;
        }
      `}</style>
    </section>
  )
} 