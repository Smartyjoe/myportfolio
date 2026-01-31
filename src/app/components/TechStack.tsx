import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const technologies = [
  { name: 'React', category: 'Framework' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Three.js', category: '3D' },
  { name: 'GSAP', category: 'Animation' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'WordPress', category: 'CMS' },
  { name: 'Figma', category: 'Design' },
  { name: 'WebGL', category: '3D' },
  { name: 'GraphQL', category: 'API' },
  { name: 'PostgreSQL', category: 'Database' },
];

// Duplicate for seamless loop
const duplicatedTech = [...technologies, ...technologies];

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-indigo-400 text-sm tracking-widest uppercase mb-4 block">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Tools & Technologies
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Modern tools and frameworks for cutting-edge solutions
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          {/* Animated Marquee */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -50 * technologies.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTech.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="relative px-8 py-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300 min-w-[200px]">
                    <div className="text-center">
                      <div className="text-lg mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                        {tech.name}
                      </div>
                      <div className="text-xs text-gray-500">{tech.category}</div>
                    </div>
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-all duration-500 pointer-events-none" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm">
            Always learning and adapting to the latest technologies and best practices
          </p>
        </motion.div>
      </div>
    </section>
  );
}
