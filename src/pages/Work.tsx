
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, AppWindow, TrendingUp, Search, Mail, Palette, LayoutTemplate, PenTool, Globe, Terminal, Code, AtSign, Image } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageTransition from '@/layout/PageTransition';

const Work = () => {
  const services = [
    // App Development
    {
      icon: Smartphone,
      title: "iOS App Development",
      description: "We build native iOS applications that are tailored to your business needs, with stunning UIs and seamless functionality."
    },
    {
      icon: AppWindow,
      title: "Android App Development",
      description: "Create high-performance Android applications designed for the modern user with smooth performance and engaging experiences."
    },
    {
      icon: Terminal,
      title: "Cross-Platform Development",
      description: "Leverage technologies like React Native and Flutter to build apps that work seamlessly across multiple platforms."
    },
    
    // Digital Marketing
    {
      icon: TrendingUp,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns that engage your audience, build brand awareness, and drive conversions."
    },
    {
      icon: Search,
      title: "SEO & Content Marketing",
      description: "Optimize your online presence to rank higher in search engines and attract qualified leads with targeted content."
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Create personalized email campaigns that nurture leads, drive conversions, and build long-term customer loyalty."
    },
    {
      icon: AtSign,
      title: "Paid Advertising",
      description: "Targeted PPC campaigns on Google, Facebook, Instagram, and LinkedIn to maximize your ROI and reach your ideal customers."
    },
    
    // UI/UX Design
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive, accessible, and enjoyable experiences for your customers."
    },
    {
      icon: LayoutTemplate,
      title: "Website & App Design",
      description: "Visually stunning and functional designs for websites and applications that engage users and drive conversions."
    },
    {
      icon: PenTool,
      title: "Logo & Brand Identity",
      description: "Distinctive visual identities that communicate your brand values and create a lasting impression."
    },
    {
      icon: Image,
      title: "Figma Design",
      description: "Professional Figma designs with interactive prototypes that streamline the development process."
    },
    
    // Website Development
    {
      icon: Globe,
      title: "Custom Website Development",
      description: "Tailor-made, responsive websites that reflect your brand and drive business results."
    },
    {
      icon: Code,
      title: "E-commerce Solutions",
      description: "Secure, scalable online stores that provide seamless shopping experiences and boost your sales."
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
                Comprehensive Digital Solutions for Modern Businesses
              </motion.h1>
              
              <motion.p 
                className="text-muted-foreground text-lg md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                From mobile apps to digital marketing, we provide end-to-end solutions 
                that help businesses thrive in the digital age.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <Projects />

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
