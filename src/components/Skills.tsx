import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import {
  SiLua, SiTypescript, SiJavascript, SiPython, SiCplusplus,
  SiAstro, SiTailwindcss, SiFivem, SiMysql, SiMongodb,
  SiNodedotjs, SiGit
} from 'react-icons/si';
import { FaJava, FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const technologies = [
  { name: 'Lua', icon: <SiLua />, color: 'text-[#2C2D72]' },
  { name: 'TypeScript', icon: <SiTypescript />, color: 'text-[#3178C6]' },
  { name: 'JavaScript', icon: <SiJavascript />, color: 'text-[#F7DF1E]' },
  { name: 'Java', icon: <FaJava />, color: 'text-[#007396]' },
  { name: 'Python', icon: <SiPython />, color: 'text-[#3776AB]' },
  { name: 'React', icon: <FaReact />, color: 'text-[#61DAFB]' },
  { name: 'Astro', icon: <SiAstro />, color: 'text-[#FF5D01]' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-[#06B6D4]' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-[#339933]' },
  { name: 'FiveM', icon: <SiFivem />, color: 'text-[#FF8F00]' },
  { name: 'Git', icon: <SiGit />, color: 'text-[#F05032]' },
  { name: 'MySQL', icon: <SiMysql />, color: 'text-[#4479A1]' },
  { name: 'MongoDB', icon: <SiMongodb />, color: 'text-[#47A248]' },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-32 relative bg-[#030014]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 glass rounded-2xl">
              <Code2 className="w-8 h-8 text-primary-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Stack <span className="text-gradient">Tecnológico</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Un arsenal de herramientas modernas seleccionadas para construir soluciones
            escalables, eficientes y visualmente impactantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el!)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>
                <div className="relative glass-card p-8 rounded-2xl flex flex-col items-center justify-center gap-4 h-full">
                  <div className={`text-5xl ${tech.color} transition-transform duration-500 group-hover:scale-110`}>
                    {tech.icon}
                  </div>
                  <span className="text-gray-300 font-medium tracking-wide text-sm group-hover:text-white transition-colors">
                    {tech.name}
                  </span>

                  <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-white/10 group-hover:bg-primary-500 transition-colors" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
