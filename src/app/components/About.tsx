import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="text-indigo-400 text-sm tracking-widest uppercase mb-4 block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              About
            </motion.span>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Bridging Design & Development
              </span>
            </motion.h2>

            <motion.div 
              className="space-y-6 text-gray-400 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p>
                With over a decade of experience in the digital space, I specialize in creating 
                web experiences that are not only visually stunning but also technically sophisticated 
                and performance-optimized.
              </p>
              
              <p>
                My approach combines strategic design thinking with modern development practices, 
                ensuring every project delivers measurable results and exceptional user experiences. 
                From concept to deployment, I focus on craftsmanship, attention to detail, and 
                scalable solutions.
              </p>

              <p>
                I believe in the power of collaboration and clear communication. Working closely 
                with clients and teams, I transform complex challenges into elegant, intuitive 
                digital products that stand the test of time.
              </p>
            </motion.div>

            <motion.div
              className="mt-12 grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div>
                <div className="text-4xl font-light mb-2 text-indigo-400">10+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-light mb-2 text-indigo-400">150+</div>
                <div className="text-sm text-gray-500">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-light mb-2 text-indigo-400">50+</div>
                <div className="text-sm text-gray-500">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 overflow-hidden">
              {/* About Visual Image */}
              <img 
                src="/images/about-visual.png" 
                alt="Design and Development"
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-70"
              />
              
              {/* Abstract Geometric Pattern */}
              <div className="absolute inset-0">
                <motion.div
                  className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-indigo-500/20 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </div>
              
              {/* Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
