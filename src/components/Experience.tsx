import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const experienceKeys = [
  { title: 'job1Title', company: 'job1Company', period: 'job1Period', description: 'job1Desc' },
  { title: 'job2Title', company: 'job2Company', period: 'job2Period', description: 'job2Desc' },
  { title: 'job3Title', company: 'job3Company', period: 'job3Period', description: 'job3Desc' },
];

const techLists = [
  ['Lua', 'JavaScript', 'TypeScript', 'React', 'FiveM'],
  ['React', 'TypeScript', 'Astro', 'Tailwind CSS'],
  ['Java', 'Python', 'JavaScript', 'HTML/CSS'],
];

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-32 relative bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-gray-100">
            {t('experience.title')} <span className="text-gradient">{t('experience.titleHighlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-500 dark:from-primary-500 dark:to-primary-600 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experienceKeys.map((exp, index) => (
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
                    <Briefcase className="w-6 h-6 text-slate-700 dark:text-primary-400" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-gray-100">{t(`experience.${exp.title}`)}</h3>
                  </div>
                  <p className="text-slate-800 dark:text-primary-400 text-lg font-semibold mb-2">{t(`experience.${exp.company}`)}</p>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-gray-400">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{t(`experience.${exp.period}`)}</span>
                </div>
              </div>
              <p className="text-slate-700 dark:text-gray-400 mb-6 leading-relaxed">{t(`experience.${exp.description}`)}</p>
              <div className="flex flex-wrap gap-2">
                {techLists[index].map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-slate-200 dark:bg-primary-500/20 border border-slate-300 dark:border-primary-500/30 rounded-lg text-sm font-medium text-slate-800 dark:text-primary-400"
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
