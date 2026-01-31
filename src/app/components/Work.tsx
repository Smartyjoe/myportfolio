import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Nexus Financial',
    category: 'Fintech Platform',
    description: 'A comprehensive financial management platform with real-time analytics and AI-powered insights.',
    tech: ['React', 'TypeScript', 'Three.js', 'Node.js'],
    gradient: 'from-blue-600/20 to-cyan-600/20',
    year: '2024'
  },
  {
    id: 2,
    title: 'Lumina Studio',
    category: 'Creative Agency',
    description: 'Award-winning portfolio website featuring immersive 3D experiences and cutting-edge animations.',
    tech: ['Next.js', 'WebGL', 'GSAP', 'Tailwind'],
    gradient: 'from-purple-600/20 to-pink-600/20',
    year: '2024'
  },
  {
    id: 3,
    title: 'EcoTrack',
    category: 'Sustainability App',
    description: 'Mobile-first application helping companies track and reduce their carbon footprint.',
    tech: ['React Native', 'Firebase', 'Chart.js'],
    gradient: 'from-green-600/20 to-emerald-600/20',
    year: '2023'
  },
  {
    id: 4,
    title: 'Velocity Commerce',
    category: 'E-commerce',
    description: 'High-performance e-commerce platform with seamless checkout and inventory management.',
    tech: ['Next.js', 'Stripe', 'Shopify', 'PostgreSQL'],
    gradient: 'from-orange-600/20 to-red-600/20',
    year: '2023'
  }
];

export function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-indigo-400 text-sm tracking-widest uppercase mb-4 block">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A curated selection of recent work spanning digital products, web applications, and brand experiences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                className="group relative h-full cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
                  {/* Project Visual */}
                  <div className={`relative aspect-[4/3] bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                    {/* Animated Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    
                    {/* Animated Orbs */}
                    <motion.div
                      className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10 blur-3xl"
                      animate={hoveredId === project.id ? {
                        scale: [1, 1.2, 1],
                        x: [0, 20, 0],
                        y: [0, -20, 0],
                      } : {}}
                      transition={{
                        duration: 3,
                        repeat: hoveredId === project.id ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-white/10 blur-3xl"
                      animate={hoveredId === project.id ? {
                        scale: [1.2, 1, 1.2],
                        x: [0, -20, 0],
                        y: [0, 20, 0],
                      } : {}}
                      transition={{
                        duration: 3,
                        repeat: hoveredId === project.id ? Infinity : 0,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    />

                    {/* Year Badge */}
                    <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-xs text-gray-300">
                      {project.year}
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-sm text-indigo-400 mb-2 block">{project.category}</span>
                        <h3 className="text-2xl mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                      <motion.div
                        className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 45 }}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </motion.div>
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Link */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="group inline-flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors duration-300">
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
