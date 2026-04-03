/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  X, 
  Instagram, 
  Mail, 
  ChevronRight, 
  Menu, 
  ArrowRight,
  ExternalLink,
  Youtube,
  Facebook,
  Phone,
  Globe
} from 'lucide-react';
import { CATEGORIES, PROJECTS, SERVICES, ABOUT_ME, UI_TEXT, HERO_VIDEO_URL, HERO_IMAGE_URL, HERO_YOUTUBE_ID, ABOUT_IMAGE_URL } from './constants';
import { Category, Project } from './types';

export default function App() {
  const [lang, setLang] = useState<'en' | 'vi'>('vi');
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = (key: keyof typeof UI_TEXT) => UI_TEXT[key][lang];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter"
          >
            DINO AI MEDIA //
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-12 text-sm font-medium tracking-widest uppercase">
            <a href="#portfolio" className="hover:text-gray-400 transition-colors">{t('portfolio')}</a>
            <a href="#about" className="hover:text-gray-400 transition-colors">{t('about')}</a>
            <a href="#services" className="hover:text-gray-400 transition-colors">{t('services')}</a>
            <a href="#contact" className="hover:text-gray-400 transition-colors">{t('contact')}</a>
            
            <button 
              onClick={() => setLang(lang === 'en' ? 'vi' : 'en')}
              className="flex items-center space-x-2 px-3 py-1 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs">{lang === 'en' ? 'VI' : 'EN'}</span>
            </button>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <button 
              onClick={() => setLang(lang === 'en' ? 'vi' : 'en')}
              className="p-2 border border-white/20 rounded-full"
            >
              <Globe className="w-4 h-4" />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-8 text-2xl uppercase tracking-widest"
          >
            <button 
              className="absolute top-6 right-6"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>{t('portfolio')}</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>{t('about')}</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>{t('services')}</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>{t('contact')}</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {HERO_YOUTUBE_ID ? (
            <div className="absolute inset-0 w-full h-full scale-150">
              <iframe
                src={`https://www.youtube.com/embed/${HERO_YOUTUBE_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${HERO_YOUTUBE_ID}&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          ) : (
            <img 
              src={HERO_IMAGE_URL} 
              alt="Hero Background" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
          )}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-[8rem] font-bold tracking-tighter leading-none mb-4">
              DINO AI MEDIA
            </h1>
            <div className="flex items-center justify-center space-x-4">
              <span className="h-[1px] w-12 bg-white/50" />
              <p className="text-xl md:text-3xl italic font-serif tracking-wide">
                AI - Creator
              </p>
              <span className="h-[1px] w-12 bg-white/50" />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] uppercase opacity-50"
        >
          {t('scrollExplore')}
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 uppercase">
              {t('about')}
            </h2>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl font-medium leading-tight text-gray-200">
                {ABOUT_ME.title[lang]}
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                {ABOUT_ME.description[lang]}
              </p>
              <p className="text-lg text-gray-500 leading-relaxed italic">
                {ABOUT_ME.subDescription[lang]}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden group transition-all duration-700"
          >
            <img 
              src={ABOUT_IMAGE_URL} 
              alt="Dino AI Creator" 
              className="w-full h-full object-cover brightness-[0.85] hover:brightness-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-[#f5f5f5] text-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-6xl md:text-8xl font-serif italic mb-4">{t('whatIDo')}</h2>
              <p className="text-xl text-gray-600">Let's create the unforgettable together</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-10 border border-black/10 rounded-[3rem] overflow-hidden transition-all duration-500 flex flex-col justify-between h-72 cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.imageUrl} 
                    alt="" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.5] group-hover:brightness-[0.3]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 text-white h-full flex flex-col justify-between">
                  <h3 className="text-2xl font-medium leading-tight tracking-tight">{service.title[lang]}</h3>
                  <div className="flex justify-between items-end">
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-[85%] leading-relaxed">
                      {service.description[lang]}
                    </p>
                    <ArrowRight className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">{t('work')}</h2>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setActiveCategory('All')}
                className={`px-6 py-2 rounded-full text-sm font-medium tracking-widest uppercase transition-all ${activeCategory === 'All' ? 'bg-white text-black' : 'border border-white/20 hover:border-white'}`}
              >
                {t('all')}
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium tracking-widest uppercase transition-all ${activeCategory === cat ? 'bg-white text-black' : 'border border-white/20 hover:border-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img 
                    src={project.thumbnail} 
                    alt={project.title[lang]} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 brightness-[0.8] group-hover:brightness-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold tracking-tight opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      {project.title[lang]}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-[#f5f5f5] text-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase mb-12">
              {t('letsTell')}<br />
              <span className="font-serif italic font-normal lowercase">{t('yourStory')}</span>
            </h2>
            
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-20">
              <a 
                href="mailto:dinoweddingstudio@gmail.com" 
                className="group flex items-center space-x-4 text-xl font-medium hover:opacity-60 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="hidden sm:inline">dinoweddingstudio@gmail.com</span>
              </a>
              
              <a 
                href="tel:0914286003" 
                className="group flex items-center space-x-4 text-xl font-medium hover:opacity-60 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <span>0914286003</span>
              </a>

              <a 
                href="https://www.facebook.com/dino4ever/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 text-xl font-medium hover:opacity-60 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </div>
                <span className="hidden sm:inline">Facebook</span>
              </a>

              <a 
                href="https://www.youtube.com/@dinostudio-motbucanhnganlo5176" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 text-xl font-medium hover:opacity-60 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <Youtube className="w-5 h-5" />
                </div>
                <span className="hidden sm:inline">YouTube</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black text-white/40 text-xs tracking-widest uppercase">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© 2026 DINO AI MEDIA. {t('rights')}</p>
        </div>
      </footer>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black rounded-full transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-6 h-6" />
              </button>
              
              <iframe
                src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1`}
                title={selectedProject.title[lang]}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
