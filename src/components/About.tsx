import { motion } from 'framer-motion';
import { Code, BookOpen, Target, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const achievementKeys = [
  { keyTitle: 'achievement1Title', keyDesc: 'achievement1Desc' },
  { keyTitle: 'achievement2Title', keyDesc: 'achievement2Desc' },
  { keyTitle: 'achievement3Title', keyDesc: 'achievement3Desc' },
  { keyTitle: 'achievement4Title', keyDesc: 'achievement4Desc' },
] as const;

const icons = [Code, BookOpen, Target, Award];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 relative bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-gray-100">
            {t('about.title')} <span className="text-gradient">{t('about.titleHighlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-500 dark:from-primary-500 dark:to-primary-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-gray-100">
              {t('about.trajectory')} <span className="text-gradient">{t('about.trajectoryHighlight')}</span>
            </h3>
            <p className="text-slate-700 dark:text-gray-400 text-lg leading-relaxed">
              {t('about.intro1')} <span className="text-slate-900 dark:text-primary-400 font-semibold">Jose Poveda</span>.
              {t('about.intro2')} <span className="text-slate-900 dark:text-primary-400 font-semibold">6</span> {t('about.intro2b')}
            </p>
            <p className="text-slate-700 dark:text-gray-400 text-lg leading-relaxed">
              {t('about.intro3')} <span className="text-slate-900 dark:text-primary-400 font-semibold">Lua</span>,
              {t('about.intro3b')} <span className="text-slate-900 dark:text-primary-400 font-semibold">FiveM</span>.
              {t('about.intro3c')} <span className="text-slate-900 dark:text-primary-400 font-semibold">{t('about.intro3d')}</span>
              {t('about.intro3e')}
            </p>
            <p className="text-slate-700 dark:text-gray-400 text-lg leading-relaxed">
              {t('about.intro4')} <span className="text-slate-900 dark:text-primary-400 font-semibold">Git</span> {t('about.intro4b')}
              <span className="text-slate-900 dark:text-primary-400 font-semibold">GitHub</span>.
              {t('about.intro4c')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {achievementKeys.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-xl card-hover"
              >
                {(() => {
                  const Icon = icons[index];
                  return <Icon className="w-10 h-10 text-slate-700 dark:text-primary-400 mb-4" />;
                })()}
                <h4 className="text-xl font-semibold mb-2 text-slate-900 dark:text-gray-100">
                  {t(`about.${item.keyTitle}`)}
                </h4>
                <p className="text-slate-700 dark:text-gray-400 text-sm">
                  {t(`about.${item.keyDesc}`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
