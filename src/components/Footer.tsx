
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/d7e6819a-2770-498e-98e0-41a27f75adea.png" 
                alt="Sarvmedia Logo" 
                className="h-20 w-auto" 
              />
            </Link>
            <div className="flex space-x-4 mt-2">
              <a 
                href="https://www.instagram.com/sarvmedia1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/sarv-media" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/work" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  iOS App Development
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Android App Development
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  SEO & Content Marketing
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Website Development
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary-foreground/70" />
                <a href="tel:+12499892347" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  (249) 989-2347
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary-foreground/70" />
                <a href="tel:+14375996550" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  (437) 599-6550
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary-foreground/70" />
                <a href="mailto:sarvmedia1@gmail.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  sarvmedia1@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-primary-foreground/60 text-sm text-center">
            © {new Date().getFullYear()} Sarv Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
