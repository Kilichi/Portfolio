import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { SiLinkedin, SiGithub, SiDiscord } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';

const contactMethods = [
  { icon: Mail, title: 'Email', value: 'josepovedaks@gmail.com', href: 'mailto:josepovedaks@gmail.com', color: 'bg-red-500' },
  { icon: SiLinkedin, title: 'LinkedIn', value: 'linkedin.com/in/josepoveda', href: 'https://www.linkedin.com/in/jose-poveda-70516328b/', color: 'bg-[#0A66C2]' },
  { icon: SiGithub, title: 'GitHub', value: 'github.com/kilichi', href: 'https://github.com/kilichi', color: 'bg-[#181717]' },
  { icon: SiDiscord, title: 'Discord', value: 'kilcihi', href: '#', color: 'bg-[#5865F2]' },
];

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ email: '', motivo: '', mensaje: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!FORMSPREE_ID) {
      setStatus('error');
      setErrorMessage(t('contact.errorConfig'));
      return;
    }
    setStatus('sending');
    setErrorMessage('');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: new FormData(e.target as HTMLFormElement),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ email: '', motivo: '', mensaje: '' });
      } else {
        const data = await res.json();
        setStatus('error');
        setErrorMessage(data.error || t('contact.errorSend'));
      }
    } catch {
      setStatus('error');
      setErrorMessage(t('contact.errorNetwork'));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-32 relative bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-gray-100">
            <span className="text-gradient">{t('contact.title')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-500 dark:from-primary-500 dark:to-primary-600 mx-auto rounded-full mb-4" />
          <p className="text-slate-700 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {t('contact.intro')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-xl card-hover group flex flex-col items-center text-center"
            >
              <div className={`w-14 h-14 rounded-2xl ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-white`}>
                <method.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-gray-100 mb-2 group-hover:text-blue-800 dark:group-hover:text-primary-400 transition-colors">
                {method.title}
              </h3>
              <p className="text-slate-700 dark:text-gray-400 text-sm">{method.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass p-8 rounded-2xl max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-gray-100 mb-2 text-center">
            {t('contact.formTitle')}
          </h3>
          <p className="text-slate-600 dark:text-gray-400 mb-8 text-center">
            {t('contact.formSubtitle')}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" name="_subject" value="Portfolio - Nuevo mensaje de contacto" className="hidden" readOnly />
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-800 dark:text-gray-300 mb-2">
                {t('contact.yourEmail')}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-gray-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-violet-500 focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="motivo" className="block text-sm font-medium text-slate-800 dark:text-gray-300 mb-2">
                {t('contact.reason')}
              </label>
              <input
                id="motivo"
                type="text"
                name="motivo"
                required
                value={formData.motivo}
                onChange={handleChange}
                placeholder={t('contact.reasonPlaceholder')}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-gray-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-violet-500 focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-slate-800 dark:text-gray-300 mb-2">
                {t('contact.message')}
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={5}
                value={formData.mensaje}
                onChange={handleChange}
                placeholder={t('contact.messagePlaceholder')}
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-gray-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-violet-500 focus:border-transparent transition-colors resize-none"
              />
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <p>{t('contact.success')}</p>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-start gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p>{errorMessage}</p>
              </div>
            )}

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 dark:bg-violet-600 dark:hover:bg-violet-500 disabled:bg-slate-500 dark:disabled:bg-violet-800 disabled:cursor-not-allowed rounded-xl font-semibold text-white shadow-lg shadow-slate-800/30 dark:shadow-violet-500/30 transition-all duration-300"
              whileHover={status === 'sending' ? undefined : { scale: 1.02 }}
              whileTap={status === 'sending' ? undefined : { scale: 0.98 }}
            >
              {status === 'sending' ? (
                <>{t('contact.sending')}</>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {t('contact.send')}
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
