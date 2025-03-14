
import React from 'react';
import { ArrowRight, Server, Shield, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div 
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            className="px-4 py-1.5 bg-accent/10 text-accent text-xs font-medium rounded-full mb-6"
            variants={itemVariants}
          >
            IT Services for the Modern Enterprise
          </motion.span>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            variants={itemVariants}
          >
            Transform your business with{' '}
            <span className="text-gradient">powerful IT solutions</span>
          </motion.h1>

          <motion.p 
            className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl"
            variants={itemVariants}
          >
            We provide end-to-end technology services to help businesses innovate, 
            scale, and stay ahead of the competition.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md"
            variants={itemVariants}
          >
            <Link 
              to="/contact" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-medium w-full sm:w-auto text-center transition-colors flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight size={16} />
            </Link>
            <Link 
              to="/work" 
              className="text-foreground hover:text-accent px-8 py-3 rounded-full font-medium border border-border hover:border-accent w-full sm:w-auto text-center transition-colors"
            >
              Our Services
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-glass border border-border/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent mb-6">
              <Server size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Cloud Infrastructure</h3>
            <p className="text-muted-foreground">
              Scalable, secure, and reliable cloud solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-glass border border-border/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent mb-6">
              <Code size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Custom Software</h3>
            <p className="text-muted-foreground">
              Bespoke applications designed to solve your unique business challenges.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-glass border border-border/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent mb-6">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
            <p className="text-muted-foreground">
              Comprehensive security solutions to protect your digital assets and data.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
