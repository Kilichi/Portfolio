import { motion } from 'framer-motion';
import { Briefcase, Calendar, Code2 } from 'lucide-react';

const experiences = [
  {
    title: 'Desarrollador Full Stack',
    company: 'Servidores de Videojuegos (FiveM)',
    period: '2018 - Presente',
    description: 'Desarrollo de servidores de videojuegos utilizando Lua como lenguaje principal. Creación de sistemas complejos, interfaces de usuario modernas y optimización de rendimiento.',
    technologies: ['Lua', 'JavaScript', 'TypeScript', 'React', 'FiveM'],
  },
  {
    title: 'Desarrollador Frontend',
    company: 'Proyectos Personales',
    period: '2020 - Presente',
    description: 'Desarrollo de interfaces modernas y responsivas utilizando React, TypeScript y Astro. Enfoque en UX/UI excepcionales y rendimiento optimizado.',
    technologies: ['React', 'TypeScript', 'Astro', 'Tailwind CSS'],
  },
  {
    title: 'Estudiante DAW',
    company: 'Desarrollo de Aplicaciones Web',
    period: '2023 - Presente',
    description: 'Estudiante de primer curso con excelentes resultados. Especialización en programación con calificación de 10. Aprendizaje continuo de tecnologías web modernas.',
    technologies: ['Java', 'Python', 'JavaScript', 'HTML/CSS'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mi <span className="text-gradient">Experiencia</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-8 rounded-xl card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-6 h-6 text-primary-400" />
                    <h3 className="text-2xl font-bold text-gray-100">{exp.title}</h3>
                  </div>
                  <p className="text-primary-400 text-lg font-semibold mb-2">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-lg text-sm font-medium text-primary-400"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
