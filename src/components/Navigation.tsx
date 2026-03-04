import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const navKeys = ['home', 'about', 'experience', 'skills', 'projects', 'contact'] as const;

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = navKeys.map((key) => ({
    name: t(`nav.${key}`),
    href: key === 'home' ? '#home' : `#${key}`,
  }));

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white dark:bg-white/5 py-3 shadow-md dark:shadow-lg border-b border-slate-200 dark:border-white/10 backdrop-blur-xl'
            : 'bg-slate-50 dark:bg-transparent py-5 border-b border-slate-200 dark:border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              className="text-2xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              JP
            </motion.a>

            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-1 text-sm font-medium text-slate-900 dark:text-gray-400">
                <Languages className="w-4 h-4" />
                <button
                  onClick={() => setLang('es')}
                  className={`px-2 py-1 rounded ${lang === 'es' ? 'bg-blue-800 text-white dark:bg-violet-600' : 'hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-gray-400'}`}
                >
                  ES
                </button>
                <span className="text-slate-400 dark:text-gray-400">|</span>
                <button
                  onClick={() => setLang('en')}
                  className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-blue-800 text-white dark:bg-violet-600' : 'hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-gray-400'}`}
                >
                  EN
                </button>
              </div>
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
                className="p-2 rounded-lg bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-900 dark:text-gray-300 transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    className="text-slate-900 dark:text-gray-300 hover:text-blue-800 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <div className="flex items-center gap-0.5 text-sm">
                <button
                  onClick={() => setLang('es')}
                  className={`px-2 py-1 rounded ${lang === 'es' ? 'bg-blue-800 text-white dark:bg-violet-600' : 'text-slate-900 dark:text-gray-400'}`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-blue-800 text-white dark:bg-violet-600' : 'text-slate-900 dark:text-gray-400'}`}
                >
                  EN
                </button>
              </div>
              <button
                onClick={toggleTheme}
                aria-label="Tema"
                className="p-2 rounded-lg text-slate-900 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-white/10"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-900 dark:text-gray-300 hover:text-blue-800 dark:hover:text-primary-400 hover:bg-slate-200 dark:hover:bg-transparent rounded-lg"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-40 w-64 glass md:hidden border-l border-slate-200 dark:border-white/10"
          >
            <div className="flex flex-col p-6 space-y-4 mt-20">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className="text-slate-900 dark:text-gray-300 hover:text-blue-800 dark:hover:text-primary-400 py-2 text-lg font-medium"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
