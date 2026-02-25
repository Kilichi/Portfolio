import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'josepovedaks@gmail.com',
    href: 'mailto:josepovedaks@gmail.com',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'linkedin.com/in/josepoveda',
    href: 'https://www.linkedin.com/in/jose-poveda-70516328b/',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Github,
    title: 'GitHub',
    value: 'github.com/kilichi',
    href: 'https://github.com/kilichi',
    color: 'from-gray-500 to-gray-600',
  },
  {
    icon: MessageSquare,
    title: 'Discord',
    value: 'kilcihi',
    href: '#',
    color: 'from-indigo-500 to-indigo-600',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Contacto</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escucharlo. 
            Estoy siempre abierto a nuevas oportunidades y colaboraciones.
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
              className="glass p-6 rounded-xl card-hover group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <method.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-primary-400 transition-colors">
                {method.title}
              </h3>
              <p className="text-gray-400 text-sm">{method.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass p-8 rounded-xl text-center"
        >
          <h3 className="text-2xl font-bold text-gray-100 mb-4">
            ¿Listo para trabajar juntos?
          </h3>
          <p className="text-gray-400 mb-6">
            Estoy disponible para proyectos freelance, colaboraciones o simplemente para charlar sobre tecnología.
          </p>
          <motion.a
            href="mailto:jose.poveda@example.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg font-semibold text-white shadow-lg shadow-primary-500/50 hover:shadow-xl hover:shadow-primary-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar Mensaje
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
