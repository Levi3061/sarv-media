
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import { ArrowRight, Users, Clock, Award, Code, Server, Database, Shield, Cpu, Wifi, HardDrive } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageTransition from '@/layout/PageTransition';

const Index = () => {
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
                Comprehensive IT Services
              </motion.h2>
              <motion.p 
                className="text-muted-foreground text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                From cloud infrastructure to cybersecurity, we provide end-to-end 
                solutions for modern businesses.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Code, title: "Custom Development", desc: "Tailored software solutions built for your specific needs" },
                { icon: Server, title: "Cloud Services", desc: "Scalable and secure cloud infrastructure solutions" },
                { icon: Database, title: "Data Management", desc: "Efficient data storage and analytics solutions" },
                { icon: Shield, title: "Cybersecurity", desc: "Advanced security measures to protect your assets" },
                { icon: Cpu, title: "IT Infrastructure", desc: "Robust and scalable IT infrastructure setup" },
                { icon: Wifi, title: "Network Solutions", desc: "Reliable networking and connectivity services" },
                { icon: HardDrive, title: "Backup & Recovery", desc: "Secure data backup and disaster recovery" },
                { icon: Users, title: "IT Consulting", desc: "Strategic technology consulting and planning" },
                { icon: Clock, title: "24/7 Support", desc: "Round-the-clock technical support services" },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white p-8 rounded-2xl shadow-glass border border-border/50 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent mb-6">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <Link 
                    to="/work" 
                    className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
                  >
                    Learn more <ArrowRight size={16} className="ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
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
                Let's discuss how our IT solutions can help you achieve your business goals.
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
