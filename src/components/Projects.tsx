import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Sistema de Economía FiveM',
    description: 'Sistema completo de economía para servidores de FiveM con integración de bancos, tiendas y trabajos. Desarrollado con Lua y React para las interfaces.',
    technologies: ['Lua', 'React', 'TypeScript', 'FiveM'],
    category: 'FiveM',
    image: '🎮',
  },
  {
    title: 'Panel de Administración',
    description: 'Panel de administración moderno y responsive para gestión de servidores. Incluye dashboard, estadísticas en tiempo real y sistema de permisos.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    category: 'Web App',
    image: '⚙️',
  },
  {
    title: 'Sistema de Inventario',
    description: 'Sistema de inventario avanzado con drag & drop, categorías, y sincronización en tiempo real. Optimizado para rendimiento y UX excepcional.',
    technologies: ['React', 'TypeScript', 'Lua', 'FiveM'],
    category: 'FiveM',
    image: '📦',
  },
  {
    title: 'Portfolio Personal',
    description: 'Portfolio moderno desarrollado con Astro y React. Diseño oscuro, animaciones fluidas y optimizado para rendimiento y SEO.',
    technologies: ['Astro', 'React', 'TypeScript', 'Tailwind CSS'],
    category: 'Web',
    image: '💼',
  },
  {
    title: 'Sistema de HUD',
    description: 'HUD personalizado para servidores FiveM con diseño moderno, animaciones suaves y personalización completa. Optimizado para rendimiento.',
    technologies: ['React', 'TypeScript', 'Lua', 'FiveM'],
    category: 'FiveM',
    image: '🖥️',
  },
  {
    title: 'API REST para Servidores',
    description: 'API REST completa para gestión de datos de servidores. Incluye autenticación, validación y documentación completa.',
    technologies: ['Node.js', 'TypeScript', 'Express', 'MongoDB'],
    category: 'Backend',
    image: '🔌',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="text-gradient">Proyectos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-6 rounded-xl card-hover group"
            >
              <div className="text-6xl mb-4">{project.image}</div>
              
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-primary-500/20 border border-primary-500/30 rounded-full text-xs font-medium text-primary-400">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-100 mb-3 group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-800/50 rounded-lg text-xs font-medium text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.a
                  href="#"
                  className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="text-sm font-medium">Ver Proyecto</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm font-medium">Código</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
