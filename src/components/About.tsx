import { motion } from 'framer-motion';
import { Code, BookOpen, Target, Award } from 'lucide-react';

const achievements = [
  {
    icon: Code,
    title: '6 Años de Experiencia',
    description: 'Desarrollando servidores de videojuegos y aplicaciones web',
  },
  {
    icon: BookOpen,
    title: 'Autodidacta',
    description: 'Aprendizaje continuo desde JavaScript hasta TypeScript y más',
  },
  {
    icon: Target,
    title: 'Especialista FiveM',
    description: 'Experto en desarrollo con Lua para servidores de videojuegos',
  },
  {
    icon: Award,
    title: 'Excelencia Académica',
    description: '10 en Programación, sin exámenes suspendidos en DAW',
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-gradient">Mí</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-100">
              Mi <span className="text-gradient">Trayectoria</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Hola, soy <span className="text-primary-400 font-semibold">Jose Poveda</span>. 
              Llevo aproximadamente <span className="text-primary-400 font-semibold">6 años</span> trabajando 
              como desarrollador, especializándome en servidores de videojuegos.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Mi viaje comenzó de forma autodidacta con cursos de Udemy sobre JavaScript, 
              y poco a poco fui expandiendo mis conocimientos hacia TypeScript. 
              Posteriormente, me centré en <span className="text-primary-400 font-semibold">Lua</span>, 
              el lenguaje que uso a diario para desarrollo en <span className="text-primary-400 font-semibold">FiveM</span>.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              He desarrollado interfaces de todo tipo y he aprendido <span className="text-primary-400 font-semibold">React JS</span> 
              y <span className="text-primary-400 font-semibold">Astro</span>, que actualmente estoy explorando. 
              Actualmente estudio <span className="text-primary-400 font-semibold">primero de DAW</span> y me va bastante bien, 
              especialmente en programación donde tengo un <span className="text-primary-400 font-semibold">10</span>.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              También tengo buenos conocimientos de <span className="text-primary-400 font-semibold">Java</span> y 
              <span className="text-primary-400 font-semibold"> Python</span>, lo que me permite abordar 
              proyectos desde múltiples perspectivas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-xl card-hover"
              >
                <achievement.icon className="w-10 h-10 text-primary-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-gray-100">
                  {achievement.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
