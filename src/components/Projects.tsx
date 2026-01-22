import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal, Cpu, Database, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectCardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      projectCardsRef.current.forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          x: i % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'Sistema de Economía FiveM',
      description: 'Arquitectura completa de economía con persistencia en SQL, integración bancaria avanzada y sistema de impuestos dinámicos.',
      technologies: ['Lua', 'React', 'TypeScript', 'MySQL'],
      category: 'FiveM Core',
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Nexus Admin Panel',
      description: 'Panel de control centralizado con monitoreo en tiempo real, gestión de logs y sistema de permisos basado en roles.',
      technologies: ['React', 'Node.js', 'Tailwind', 'Socket.io'],
      category: 'Web App',
      icon: <Terminal className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Advanced Inventory v2',
      description: 'Sistema de inventario con gestión de pesos, proximidad y slots dinámicos. Optimizado para alto tráfico de jugadores.',
      technologies: ['React', 'Lua', 'FiveM', 'NoSQL'],
      category: 'FiveM Script',
      icon: <Database className="w-8 h-8" />,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Modern Portfolio',
      description: 'Experiencia web inmersiva con animaciones GSAP, diseño glassmorphism y optimización SEO de alto nivel.',
      technologies: ['Astro', 'React', 'GSAP', 'Tailwind'],
      category: 'Web Design',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Proyectos <span className="text-gradient">Destacados</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-8" />
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            Una selección de mis trabajos más desafiantes, donde la funcionalidad
            se encuentra con el diseño excepcional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectCardsRef.current[index] = el!)}
              className="group relative"
            >
              <div className="relative glass-card overflow-hidden rounded-3xl p-8 h-full flex flex-col">
                {/* Background Gradient Orbs */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${project.color} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity duration-500`} />

                <div className="flex items-start justify-between mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} text-white shadow-lg`}>
                    {project.icon}
                  </div>
                  <span className="px-4 py-1.5 glass rounded-full text-xs font-bold uppercase tracking-wider text-primary-300 border border-primary-500/20">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-8 flex-grow leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300 group-hover:border-primary-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary-400 transition-colors group/link"
                  >
                    <ExternalLink className="w-5 h-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    <span>Demo En Vivo</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Repositorio</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
