
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Shield, Cpu, Wifi, HardDrive, Users, Clock } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageTransition from '@/layout/PageTransition';

const Work = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Development",
      description: "We build tailored software solutions that automate processes, improve efficiency, and drive business growth."
    },
    {
      icon: Server,
      title: "Cloud Services",
      description: "Secure and scalable cloud infrastructure solutions to help you migrate, manage, and optimize your applications."
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Comprehensive data solutions including storage, analytics, and business intelligence for informed decision-making."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security measures to protect your digital assets from threats and ensure business continuity."
    },
    {
      icon: Cpu,
      title: "IT Infrastructure",
      description: "End-to-end infrastructure solutions designed to support your organization's growth and innovation."
    },
    {
      icon: Wifi,
      title: "Network Solutions",
      description: "Reliable and secure networking solutions to keep your business connected and productive."
    },
    {
      icon: HardDrive,
      title: "Backup & Recovery",
      description: "Robust backup solutions and disaster recovery planning to protect your critical business data."
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Strategic technology consulting to help you make informed decisions and maximize ROI."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring to ensure your systems run smoothly."
    }
  ];

  return (
    <PageTransition>
      <Navbar />
      
      <main className="pt-28">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span 
                className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-medium rounded-full mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Our Services
              </motion.span>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Comprehensive IT Solutions for Modern Businesses
              </motion.h1>
              
              <motion.p 
                className="text-muted-foreground text-lg md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                From cloud infrastructure to cybersecurity, we provide end-to-end solutions 
                that help businesses thrive in the digital age.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default Work;
