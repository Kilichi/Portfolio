import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Gamepad2, GraduationCap } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(blobRef1.current, {
        x: '30%',
        y: '20%',
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to(blobRef2.current, {
        x: '-30%',
        y: '-20%',
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={blobRef1}
          className="absolute top-1/4 -left-12 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <div
          ref={blobRef2}
          className="absolute bottom-1/4 -right-12 w-[500px] h-[500px] bg-accent-600/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[#030014]/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-primary-300 mb-4 border border-primary-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Abierto a nuevos empleos
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-8 tracking-tighter"
          >
            <span className="text-white">Jose</span>{' '}
            <span className="text-gradient">Poveda</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Esculpiendo experiencias digitales de alto rendimiento. Especialista en{' '}
            <span className="text-white font-semibold">ecosistemas back-end</span> y{' '}
            <span className="text-primary-400 font-semibold">arquitecturas modernas</span>.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-14"
          >
            <div className="flex items-center gap-2 glass px-5 py-2.5 rounded-xl border-white/5 shadow-xl">
              <Code className="w-5 h-5 text-primary-400" />
              <span className="text-sm font-medium">Apasionado del desarollo</span>
            </div>
            <div className="flex items-center gap-2 glass px-5 py-2.5 rounded-xl border-white/5 shadow-xl">
              <Gamepad2 className="w-5 h-5 text-accent-400" />
              <span className="text-sm font-medium">6+ Años FiveM</span>
            </div>
            <div className="flex items-center gap-2 glass px-5 py-2.5 rounded-xl border-white/5 shadow-xl">
              <GraduationCap className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium">DAW Student</span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.a
              href="#contact"
              className="px-10 py-4 bg-white text-black rounded-full font-bold shadow-2xl hover:bg-primary-50 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 text-lg">Hablemos</span>
            </motion.a>
            <motion.a
              href="#projects"
              className="px-10 py-4 glass rounded-full font-bold text-white hover:bg-white/10 transition-all duration-300 border border-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg text-gray-300">Explorar Proyectos</span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
