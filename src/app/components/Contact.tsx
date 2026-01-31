import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Twitter, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const socialLinks = [
  { icon: Mail, label: 'Email', href: 'mailto:hello@josephsmart.com', username: 'hello@josephsmart.com' },
  { icon: Linkedin, label: 'LinkedIn', href: '#', username: 'josephsmart' },
  { icon: Github, label: 'GitHub', href: '#', username: 'josephsmart' },
  { icon: Twitter, label: 'Twitter', href: '#', username: '@josephsmart' },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-black" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/20 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-600/20 blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Main CTA */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="text-indigo-400 text-sm tracking-widest uppercase mb-6 block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Work Together
          </motion.span>
          
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Have a Project in Mind?
            </span>
            <span className="block mt-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Create Something
            </span>
            <span className="block mt-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I'm currently available for freelance projects and consulting opportunities. 
            Let's discuss how we can work together to bring your vision to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <MagneticButton 
              variant="primary"
              onClick={() => window.location.href = 'mailto:hello@josephsmart.com'}
            >
              Start a Project
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="relative h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-20"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        {/* Social Links */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-all duration-500" />
                
                <div className="relative flex items-center justify-between mb-4">
                  <link.icon className="w-6 h-6 text-indigo-400" />
                  <ArrowUpRight 
                    className="w-4 h-4 text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                  />
                </div>
                
                <div className="relative">
                  <div className="text-sm text-gray-500 mb-1">{link.label}</div>
                  <div className="text-white group-hover:text-indigo-400 transition-colors duration-300 break-all">
                    {link.username}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <p className="text-gray-500 text-sm">
            Typically responds within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
