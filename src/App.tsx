import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <>
      <div className="fixed inset-0 bg-grid z-0 opacity-20 dark:opacity-20 pointer-events-none" />
      <div className="relative z-10 min-h-screen bg-white dark:bg-transparent">
        <Navigation />
        <main className="bg-white dark:bg-transparent">
          <Hero />
          <Suspense fallback={null}>
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </Suspense>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </main>
      </div>
    </>
  );
}

export default App;
