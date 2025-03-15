
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageTransition from '@/layout/PageTransition';
import { Button } from '@/components/ui/button';

const Contact = () => {
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
                Get in Touch
              </motion.span>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Let's Work Together
              </motion.h1>
              
              <motion.p 
                className="text-muted-foreground text-lg md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Have a project in mind? Let's discuss how we can help you achieve your goals.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Instagram,
                  title: "Follow Us",
                  details: ["Connect with us on social media", "Stay updated with our latest projects"],
                  actions: [
                    { 
                      label: "Instagram", 
                      href: "https://www.instagram.com/sarvmedia1/",
                      icon: Instagram 
                    },
                    { 
                      label: "LinkedIn", 
                      href: "https://www.linkedin.com/company/sarv-media",
                      icon: Linkedin 
                    }
                  ]
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  details: ["(249) 989-2347", "(437) 599-6550"],
                  actions: [
                    { 
                      label: "Call First Number", 
                      href: "tel:+12499892347",
                      icon: Phone
                    },
                    { 
                      label: "Call Second Number", 
                      href: "tel:+14375996550",
                      icon: Phone
                    }
                  ]
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  details: ["sarvmedia1@gmail.com", "For inquiries and support"],
                  actions: [
                    {
                      label: "Send Email", 
                      href: "mailto:sarvmedia1@gmail.com",
                      icon: Mail
                    }
                  ]
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-white p-8 rounded-2xl shadow-glass text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-accent/10 text-accent mb-6">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground mb-2">
                      {detail}
                    </p>
                  ))}
                  
                  {item.actions && (
                    <div className="mt-4 space-y-2">
                      {item.actions.map((action, i) => (
                        <Button 
                          key={i} 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                          asChild
                        >
                          <a href={action.href}>
                            <action.icon className="mr-2" size={16} />
                            {action.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default Contact;
