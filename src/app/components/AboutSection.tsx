import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              Crafting Digital
              <span className="block text-violet-500">Excellence</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-400 leading-relaxed">
              I'm a designer and developer who specializes in creating high-performance 
              web experiences that combine beautiful design with cutting-edge technology.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              With years of experience in both design and development, I bring a unique 
              perspective that bridges the gap between aesthetics and functionality.
            </p>
            <div className="pt-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px flex-1 bg-gradient-to-r from-violet-500 to-transparent" />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-light text-violet-500 mb-2">8+</div>
                  <div className="text-gray-500">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-violet-500 mb-2">200+</div>
                  <div className="text-gray-500">Projects Completed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
