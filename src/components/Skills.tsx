import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const technologies = [
  // Lenguajes de Programación
  { name: 'Lua', icon: '🔵', color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' },
  { name: 'TypeScript', icon: '🔷', color: 'from-blue-400 to-blue-500', bgColor: 'bg-blue-400/10', borderColor: 'border-blue-400/30' },
  { name: 'JavaScript', icon: '🟡', color: 'from-yellow-400 to-yellow-500', bgColor: 'bg-yellow-400/10', borderColor: 'border-yellow-400/30' },
  { name: 'Java', icon: '☕', color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30' },
  { name: 'Python', icon: '🐍', color: 'from-green-500 to-green-600', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/30' },
  { name: 'C++', icon: '⚙️', color: 'from-blue-600 to-blue-700', bgColor: 'bg-blue-600/10', borderColor: 'border-blue-600/30' },
  
  // Frontend
  { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-cyan-500', bgColor: 'bg-cyan-400/10', borderColor: 'border-cyan-400/30' },
  { name: 'Astro', icon: '🚀', color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30' },
  { name: 'Tailwind CSS', icon: '💨', color: 'from-teal-400 to-teal-500', bgColor: 'bg-teal-400/10', borderColor: 'border-teal-400/30' },
  { name: 'HTML/CSS', icon: '🎨', color: 'from-orange-400 to-orange-500', bgColor: 'bg-orange-400/10', borderColor: 'border-orange-400/30' },
  
  // Backend & Herramientas
  { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-600', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/30' },
  { name: 'FiveM', icon: '🎮', color: 'from-green-400 to-green-500', bgColor: 'bg-green-400/10', borderColor: 'border-green-400/30' },
  { name: 'Git', icon: '📦', color: 'from-red-500 to-red-600', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30' },
  { name: 'Bash', icon: '💻', color: 'from-gray-500 to-gray-600', bgColor: 'bg-gray-500/10', borderColor: 'border-gray-500/30' },
  
  // Bases de Datos
  { name: 'SQL', icon: '🗄️', color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' },
  { name: 'MySQL', icon: '🐬', color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' },
  { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-600', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/30' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="w-10 h-10 text-primary-400" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Mis <span className="text-gradient">Habilidades</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full" />
        </motion.div>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-6xl">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`
                  ${tech.bgColor} ${tech.borderColor}
                  border-2 rounded-xl p-6
                  flex flex-col items-center justify-center
                  cursor-pointer
                  transition-all duration-300
                  hover:shadow-lg hover:shadow-primary-500/20
                  group
                `}
              >
                <div className={`
                  w-16 h-16 rounded-lg
                  bg-gradient-to-br ${tech.color}
                  flex items-center justify-center
                  mb-4
                  group-hover:scale-110
                  transition-transform duration-300
                  shadow-lg
                `}>
                  <span className="text-3xl">
                    {tech.icon}
                  </span>
                </div>
                <span className="text-gray-100 font-semibold text-center text-sm md:text-base">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
