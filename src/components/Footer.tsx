
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-teal text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/639f9eb6-35fe-4ca9-95fa-e8a1870c7152.png" 
                alt="Sarvmedia Logo" 
                className="h-16 w-auto" 
              />
            </Link>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/work" className="text-white/70 hover:text-white transition-colors">
                  iOS App Development
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-white/70 hover:text-white transition-colors">
                  Android App Development
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-white/70 hover:text-white transition-colors">
                  SEO & Content Marketing
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-white/70 hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-white/70 hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-white/70 hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-white/70" />
                <a href="tel:+12499892347" className="text-white/70 hover:text-white transition-colors">
                  (249) 989-2347
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-white/70" />
                <a href="tel:+14375996550" className="text-white/70 hover:text-white transition-colors">
                  (437) 599-6550
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-white/70" />
                <a href="mailto:info@sarvmedia.com" className="text-white/70 hover:text-white transition-colors">
                  info@sarvmedia.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/60 text-sm text-center">
            © {new Date().getFullYear()} Sarv Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
