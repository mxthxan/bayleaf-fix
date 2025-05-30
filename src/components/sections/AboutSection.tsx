import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { BookOpen, ChevronDown, ChevronLeft, ChevronRight, Heart, Star, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../context/translations';

const AboutSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  
  // Image slider state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      src: "https://ik.imageKit.io/jacw2jgvs/la43-listing.jpg?updatedAt=1747316422127",
      alt: "Restaurant interior"
    },
    {
      src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop",
      alt: "Traditional South Indian dishes"
    },
    {
      src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&h=600&fit=crop",
      alt: "Chef preparing food"
    },
    {
      src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop",
      alt: "Spices and ingredients"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const features = [
    {
      ...translations.about.features.ingredients,
      color: 'spice',
      icon: Heart
    },
    {
      ...translations.about.features.recipes,
      color: 'leaf',
      icon: Star
    },
    {
      ...translations.about.features.ambiance,
      color: 'chili',
      icon: Award
    }
  ];

  return (
    <section
      id="about"
      className="relative py-24 pb-32 overflow-hidden"
      style={{ backgroundColor: '#fed647' }}
    >
      <div className="container mx-auto px-4 pr-6 box-border relative z-10 overflow-y-auto scrollbar-thin scrollbar-thumb-spice-400 scrollbar-track-cream-100">
        {/* Header Section */}
        <div ref={textRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-4"
          >
            <BookOpen className="mr-2 text-spice-600" size={20} />
            <span className="uppercase tracking-widest text-sm text-spice-600">
              {translations.about.subtitle[language]}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {translations.about.title[language]}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            {translations.about.description[language]}
          </motion.p>
        </div>

        {/* Quote Section */}
        <div className="mb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <div className="bg-white/90 rounded-2xl shadow-lg p-8 md:p-12 relative">
              {/* Quote marks */}
              <div className="text-6xl text-spice-300 absolute top-4 left-6 font-serif">"</div>
              <div className="text-6xl text-spice-300 absolute bottom-4 right-6 font-serif">"</div>
              
              <blockquote className="relative z-10">
                <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-800 mb-6 leading-relaxed italic">
                  {translations.about.quote.text[language]}
                </p>
                <footer className="flex flex-col items-center">
                  <cite className="text-lg md:text-xl font-semibold text-spice-600 not-italic">
                    {translations.about.quote.author[language]}
                  </cite>
                </footer>
              </blockquote>
            </div>
          </motion.div>
        </div>
        
        {/* Main Content Grid */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-12 mb-20">
          {/* Left column: Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:pr-8"
          >
            {/* Our Story Box */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white/90 rounded-xl shadow-lg p-8 mb-8"
            >
              <h3 className="font-display text-2xl md:text-3xl mb-4 text-gray-900 font-bold">
                {translations.about.story.title[language]}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {translations.about.story.content[language]}
              </p>
            </motion.div>

            {/* Legacy Box */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/90 rounded-xl shadow-lg p-8 mb-8"
            >
              <h4 className="font-display text-xl md:text-2xl mb-4 text-gray-800 font-semibold">
                {translations.about.legacy.title[language]}
              </h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {translations.about.legacy.story[language]}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {translations.about.legacy.continuation[language]}
              </p>
            </motion.div>
          </motion.div>
          
          {/* Right column: Image Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-[700px] rounded-lg overflow-hidden shadow-xl relative group sticky top-8"
          >
            {/* Image Container */}
            <div className="relative w-full h-full">
              {images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index === currentImageIndex ? 1 : 0,
                    scale: index === currentImageIndex ? 1 : 1.1
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-white scale-110' 
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Philosophy Section with Thanjavur Temple */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Philosophy Box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-white/90 rounded-xl shadow-lg p-8"
          >
            <h4 className="font-display text-xl md:text-2xl mb-4 text-gray-800 font-semibold">
              {translations.about.philosophy.title[language]}
            </h4>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {translations.about.philosophy.content[language]}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {translations.about.philosophy.commitment[language]}
            </p>
          </motion.div>

          {/* Thanjavur Temple Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
            onClick={() => window.open('https://en.wikipedia.org/wiki/Brihadisvara_Temple', '_blank')}
          >
            <img
              src="/thanjavur temple -Photoroom.png"
              alt="Thanjavur Temple - Symbol of South Indian Heritage"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
            
            {/* Floating Learn More Animation */}
            <motion.div
              className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-2 rounded-full text-xs font-medium shadow-lg"
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Learn More
            </motion.div>
            
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-sm font-medium drop-shadow-lg group-hover:text-gray-100 transition-colors duration-300">
                Thanjavur Temple - Heritage of South India
              </p>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              >
                <p className="text-lg font-semibold mb-1">Click to Explore</p>
                <p className="text-sm">Brihadisvara Temple History</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Section - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {translations.about.featuresTitle[language]}
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {translations.about.featuresSubtitle[language]}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title[language]}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-white/90 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl text-center"
                >
                  <div className={`w-16 h-16 rounded-full bg-${feature.color}-500 text-white flex items-center justify-center mb-6 mx-auto`}>
                    <IconComponent size={32} />
                  </div>
                  <h4 className="font-display text-xl mb-4 text-gray-900 font-semibold">
                    {feature.title[language]}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description[language]}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Section - Only Authentic Recipes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-16"
        >
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-white/90 rounded-xl p-8 shadow-lg"
            >
              <div className="w-20 h-20 rounded-full bg-leaf-100 flex items-center justify-center text-leaf-600 mb-4 text-3xl font-bold mx-auto">
                {translations.about.stats.recipes.number}+
              </div>
              <h4 className="font-display text-xl mb-2 text-gray-900 font-semibold">
                {translations.about.stats.recipes.label[language]}
              </h4>
              <p className="text-gray-600">
                {translations.about.stats.recipes.subtext[language]}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 text-center">
        <Link
          to="menu"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          className="text-gray-600 flex flex-col items-center cursor-pointer hover:text-spice-600 transition-colors"
        >
          <span className="text-sm uppercase tracking-wider mb-2">
            {translations.about.cta[language]}
          </span>
          <ChevronDown size={20} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;