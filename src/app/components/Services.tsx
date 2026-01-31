import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Layout, Code2, Zap, Palette } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Website Design',
    description: 'Creating stunning, user-centered designs that captivate and convert. Every pixel is crafted with purpose and precision.',
    features: ['UI/UX Design', 'Responsive Design', 'Design Systems', 'Prototyping']
  },
  {
    icon: Layout,
    title: 'WordPress Design & Development',
    description: 'Custom WordPress solutions that combine beautiful design with powerful functionality and easy content management.',
    features: ['Custom Themes', 'Plugin Development', 'E-commerce', 'Performance Optimization']
  },
  {
    icon: Code2,
    title: 'Front-End Development',
    description: 'Building modern, performant web applications with cutting-edge technologies and best practices.',
    features: ['React & Next.js', 'TypeScript', 'Modern CSS', 'Web Animations']
  },
  {
    icon: Zap,
    title: 'Optimization & UX',
    description: 'Ensuring your website is lightning-fast, accessible, and provides an exceptional user experience.',
    features: ['Performance Tuning', 'SEO Optimization', 'Accessibility', 'Analytics']
  }
];

export function Services() {
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
            Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              What I Do
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Full-spectrum digital services for brands that demand excellence
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="relative group h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-all duration-500" />
                
                {/* Icon */}
                <motion.div
                  className="relative mb-6 inline-flex p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="w-6 h-6 text-indigo-400" />
                </motion.div>

                {/* Content */}
                <h3 className="relative text-2xl mb-4 text-white group-hover:text-indigo-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="relative text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="relative space-y-2">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      className="flex items-center text-sm text-gray-500"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 mr-3" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
