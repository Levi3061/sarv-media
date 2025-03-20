
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Blocks } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageTransition from '@/layout/PageTransition';

const About = () => {
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
                About Us
              </motion.span>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Empowering Businesses Through Technology
              </motion.h1>
              
              <motion.p 
                className="text-muted-foreground text-lg md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                We're a team of passionate technology experts dedicated to helping 
                businesses thrive in the digital age.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  We're a fun-loving crew of web designers, digital marketers, and SEO nerds on a mission to help your brand dominate online. 
                </p>
                <p className="text-muted-foreground">
                  When we're not geeking out over the latest app or marketing hack, we're probably swapping memes and debating whether pineapple belongs on pizza (it does, don't @ us).
                </p>
              </motion.div>
              
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {[
                  { number: "80+", label: "Clients Served" },
                  { number: "120+", label: "Projects Completed" },
                  { number: "15+", label: "Expert Team Members" },
                  { number: "6+", label: "Years of Excellence" }
                ].map((stat) => (
                  <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-glass text-center">
                    <div className="text-2xl font-bold text-accent mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2 
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Why Choose Us
              </motion.h2>
              <motion.p 
                className="text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Our unique approach sets us apart
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Blocks,
                  title: "Tailored Solutions",
                  description: "We create custom solutions specifically designed to meet your unique business needs and goals."
                },
                {
                  icon: Users,
                  title: "Client-Focused Approach",
                  description: "Your success is our priority. We work closely with you to understand your vision and deliver results."
                },
                {
                  icon: Target,
                  title: "Data-Driven Strategy",
                  description: "We base our decisions on metrics and analytics to ensure measurable outcomes for your business."
                },
                {
                  icon: Award,
                  title: "Continuous Innovation",
                  description: "We stay ahead of industry trends and technologies to provide cutting-edge solutions."
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  className="bg-white p-8 rounded-2xl shadow-glass text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-accent/10 text-accent mb-6">
                    <value.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default About;
