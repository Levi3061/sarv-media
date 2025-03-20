import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import { ArrowRight, Users, Clock, Award, Smartphone, Globe, PenTool, TrendingUp, Code, Search, Mail, AtSign, Image, Palette, AppWindow, Terminal, LayoutTemplate } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageTransition from '@/layout/PageTransition';
import ServiceCard from '@/components/ServiceCard';

const Index = () => {
  const services = [
    // App Development
    { 
      icon: Smartphone, 
      title: "iOS App Development", 
      desc: "Native iOS applications with stunning UIs and seamless functionality" 
    },
    { 
      icon: AppWindow, 
      title: "Android App Development", 
      desc: "High-performance Android apps designed for the modern user" 
    },
    
    // Digital Marketing
    { 
      icon: TrendingUp, 
      title: "Social Media Marketing", 
      desc: "Strategic social media campaigns that engage and convert" 
    },
    { 
      icon: Search, 
      title: "SEO & Content Marketing", 
      desc: "Rank higher in search engines with optimized content strategies" 
    },
    { 
      icon: Mail, 
      title: "Email Marketing", 
      desc: "Targeted email campaigns that drive conversions and build loyalty" 
    },
    
    // UI/UX Design
    { 
      icon: Palette, 
      title: "UI/UX Design", 
      desc: "User-centered designs that delight and engage your audience" 
    },
    { 
      icon: LayoutTemplate, 
      title: "Website & App Design", 
      desc: "Stunning visuals and intuitive interfaces for web and mobile" 
    },
    { 
      icon: PenTool, 
      title: "Brand & Logo Design", 
      desc: "Distinctive visual identities that set your brand apart" 
    },
    
    // Website Development
    { 
      icon: Globe, 
      title: "Website Development", 
      desc: "Custom, responsive websites that drive business results" 
    },
  ];

  return (
    <PageTransition>
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Why Choose Us Section */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Why Businesses Choose Us
              </motion.h2>
              <motion.p 
                className="text-muted-foreground text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                We combine technical expertise with business acumen to deliver solutions 
                that drive growth and operational excellence.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-glass border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent mb-6">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
                <p className="text-muted-foreground">
                  Our certified professionals bring years of industry experience 
                  and deep technical knowledge.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-glass border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent mb-6">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Round-the-clock technical support and monitoring to ensure 
                  your systems run smoothly.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-glass border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent mb-6">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                <p className="text-muted-foreground">
                  Track record of delivering successful solutions that drive 
                  business growth and efficiency.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Services Grid Section */}
        <section className="py-24">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Our Services
              </motion.h2>
              <motion.p 
                className="text-muted-foreground text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.desc}
                  icon={service.icon}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <Projects className="bg-secondary" />
        
        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your Business?
              </motion.h2>
              <motion.p 
                className="text-primary-foreground/80 text-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Let's discuss how our digital solutions can help you achieve your business goals.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link 
                  to="/contact" 
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-medium inline-flex items-center gap-2 transition-colors"
                >
                  Get Started
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default Index;
