import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Cpu, X, ImageIcon, UtensilsCrossed, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectCardsRef = useRef<HTMLDivElement[]>([]);
  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { t } = useLanguage();

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

  useEffect(() => {
    if (!lightboxImages) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImages(null);
      if (lightboxImages.length > 1) {
        if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i === 0 ? lightboxImages.length - 1 : i - 1));
        if (e.key === 'ArrowRight') setLightboxIndex((i) => (i === lightboxImages.length - 1 ? 0 : i + 1));
      }
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxImages]);

  const projects = [
    {
      titleKey: 'project1Title' as const,
      descriptionKey: 'project1Desc' as const,
      technologies: ['React', 'ExpressJS', 'TypeScript', 'MySQL'],
      category: 'Fivem',
      icon: <Cpu className="w-8 h-8" />,
      image: "gestion.webp",
      gallery: undefined as string[] | undefined,
      type: "privado" as const
    },
    {
      titleKey: 'project2Title' as const,
      descriptionKey: 'project2Desc' as const,
      technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
      category: 'Web App',
      icon: <UtensilsCrossed className="w-8 h-8" />,
      image: "restaurante/1.png",
      gallery: ["restaurante/1.png", "restaurante/2.png", "restaurante/3.png"],
      type: "privado" as const
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative overflow-hidden bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900 dark:text-gray-100">
            {t('projects.title')} <span className="text-gradient">{t('projects.titleHighlight')}</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-slate-400 to-slate-500 dark:from-primary-500 dark:to-accent-500 rounded-full mb-8" />
          <p className="text-slate-700 dark:text-gray-400 max-w-2xl text-lg leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectCardsRef.current[index] = el!)}
              className="group relative"
            >
              <div
                className="relative overflow-hidden rounded-3xl h-full flex flex-col min-h-[420px] glass-card"
                style={{
                  backgroundImage: project.image
                    ? `url(/${project.image})`
                    : undefined,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay para legibilidad del texto (siempre oscuro) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent dark:from-[#030014]/95 dark:via-[#030014]/70 dark:to-[#030014]/40" />

                <div className="relative z-10 flex flex-col h-full p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-white/10 backdrop-blur-sm text-white border border-white/20 shadow-lg`}>
                      {project.icon}
                    </div>
                    <span className="px-4 py-1.5 glass rounded-full text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-violet-300 border border-slate-200 dark:border-white/20">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gray-200 dark:group-hover:text-violet-300 transition-colors">
                    {t(`projects.${project.titleKey}`)}
                  </h3>

                  <p className="text-gray-200 dark:text-gray-300 mb-8 flex-grow leading-relaxed text-lg">
                    {t(`projects.${project.descriptionKey}`)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/20 dark:bg-white/10 border border-white/20 rounded-lg text-xs font-medium text-gray-200 dark:text-gray-200 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 mt-auto">
                    <button
                      type="button"
                      onClick={() => {
                        const images = project.gallery?.length ? project.gallery.map((p) => `/${p}`) : [`/${project.image}`];
                        setLightboxImages(images);
                        setLightboxIndex(0);
                      }}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 dark:bg-violet-600 dark:hover:bg-violet-500 text-white font-bold text-sm shadow-lg shadow-slate-800/30 dark:shadow-violet-500/30 hover:shadow-slate-700/40 dark:hover:shadow-violet-500/50 transition-all duration-300 border border-slate-700 dark:border-violet-500/50"
                    >
                      <ImageIcon className="w-5 h-5" />
                      <span>{t('projects.viewProject')}</span>
                    </button>
                    {project.type !== "privado" && (
                      <a
                        href="#"
                        className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>{t('projects.repo')}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImages && lightboxImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setLightboxImages(null)}
          >
            <button
              type="button"
              aria-label={t('projects.close')}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={() => setLightboxImages(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {lightboxImages.length > 1 ? (
              /* Carrusel */
              <div
                className="relative max-w-6xl max-h-[90vh] w-full flex items-center justify-center gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  aria-label="Anterior"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((i) => (i === 0 ? lightboxImages.length - 1 : i - 1));
                  }}
                  className="absolute left-0 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors -translate-x-2 md:translate-x-0"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-4xl w-full flex justify-center"
                >
                  <img
                    src={lightboxImages[lightboxIndex]}
                    alt={`${t('projects.lightboxAlt')} ${lightboxIndex + 1}`}
                    className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                  />
                </motion.div>
                <button
                  type="button"
                  aria-label="Siguiente"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((i) => (i === lightboxImages.length - 1 ? 0 : i + 1));
                  }}
                  className="absolute right-0 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors translate-x-2 md:translate-x-0"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {lightboxImages.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Imagen ${i + 1}`}
                      onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${i === lightboxIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-6xl max-h-[90vh] w-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightboxImages[0]}
                  alt={t('projects.lightboxAlt')}
                  className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
