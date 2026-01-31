import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const principles = [
  {
    number: '01',
    title: 'Craftsmanship',
    description: 'Every line of code, every pixel matters. I believe in meticulous attention to detail and pride in the work.'
  },
  {
    number: '02',
    title: 'Performance',
    description: 'Speed is a feature. Optimized experiences that load instantly and run smoothly across all devices.'
  },
  {
    number: '03',
    title: 'Clarity',
    description: 'Simple, intuitive interfaces that guide users effortlessly through their journey.'
  }
];

export function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-indigo-400 text-sm tracking-widest uppercase mb-4 block">
            Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Guiding Principles
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The foundation of every project I undertake
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm group hover:border-indigo-500/50 transition-all duration-500">
                {/* Number */}
                <motion.div
                  className="text-6xl font-light mb-6 bg-gradient-to-br from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                >
                  {principle.number}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl mb-4 group-hover:text-indigo-400 transition-colors duration-300">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {principle.description}
                </p>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/5 group-hover:to-purple-600/5 transition-all duration-500 pointer-events-none" />
              </div>

              {/* Connecting Line (except for last item) */}
              {index < principles.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-12 h-px">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          className="relative max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="relative p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm overflow-hidden">
            {/* Quote Mark */}
            <div className="absolute top-8 left-8 text-8xl text-indigo-500/20 font-serif">"</div>
            
            <blockquote className="relative text-2xl md:text-3xl leading-relaxed text-gray-300">
              Great design is not just what looks good. It's what works well, performs flawlessly, 
              and makes a lasting impression.
            </blockquote>

            {/* Gradient Orb */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-600/20 to-purple-600/20 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
