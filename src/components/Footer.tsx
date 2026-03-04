import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-gray-800 flex items-center bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-600 dark:text-gray-400 text-sm flex items-center gap-2"
          >
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-gray-400 text-sm flex items-center gap-2"
          >
            <Code className="w-4 h-4 text-slate-700 dark:text-primary-400" />
            <span>{t('footer.madeWith')}</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
