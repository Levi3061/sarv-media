
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight">TechEdge</span>
            </Link>
            <p className="text-primary-foreground/80 mb-6">
              Empowering businesses with innovative IT solutions since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
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
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-foreground/70 mt-1" />
                <span className="text-primary-foreground/70">
                  123 Tech Street, Suite 456<br />
                  San Francisco, CA 94103
                </span>
              </li>
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
                <a href="mailto:info@techedge.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  info@techedge.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={20} className="text-primary-foreground/70" />
                <a href="https://instagram.com/techedge" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  @techedge
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin size={20} className="text-primary-foreground/70" />
                <a href="https://linkedin.com/company/techedge" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  TechEdge IT Services
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-primary-foreground/60 text-sm text-center">
            © {new Date().getFullYear()} TechEdge IT Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
