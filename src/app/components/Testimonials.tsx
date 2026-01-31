import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CEO, TechVision Inc.',
    content: 'Working with Joseph was transformative for our brand. His attention to detail and technical expertise delivered results beyond our expectations. The website performs flawlessly and looks absolutely stunning.',
    rating: 5,
    image: 'SM'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Founder, Horizon Digital',
    content: 'Joseph brings a rare combination of design sensibility and technical prowess. Our new platform has increased conversions by 150% and user engagement has never been higher.',
    rating: 5,
    image: 'MC'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'VP Marketing, Quantum Labs',
    content: 'Exceptional work from start to finish. Joseph understood our vision immediately and translated it into a digital experience that truly represents our brand. Highly recommended!',
    rating: 5,
    image: 'ER'
  }
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-indigo-400 text-sm tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Client Experiences
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trusted by forward-thinking brands and industry leaders
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/5 group-hover:to-purple-600/5 transition-all duration-500" />

                {/* Stars */}
                <div className="relative flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.15 + i * 0.1 }}
                    >
                      <Star className="w-4 h-4 fill-indigo-400 text-indigo-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="relative text-gray-300 leading-relaxed mb-8">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="relative flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-medium">
                    {testimonial.image}
                  </div>
                  
                  <div>
                    <div className="font-medium text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-8 right-8 text-6xl text-indigo-500/10 font-serif leading-none">"</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
