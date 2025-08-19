import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '/src/components/ui/input';

const Hero = ({ searchTerm, setSearchTerm }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={`relative py-24 md:py-32 bg-[url('/hero-background.jpg')] bg-cover bg-center text-white overflow-hidden`}
    >
      <div className="absolute inset-0 bg-primary/70"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          Government & Fire Service Forms
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Find and submit official forms with ease. Your central hub for all
          public service applications and reports.
        </motion.p>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for a form by name or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 text-base bg-white text-gray-800 border-transparent focus:ring-primary focus:border-primary shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
