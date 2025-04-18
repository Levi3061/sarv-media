import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4", isScrolled ? "backdrop-blur-md bg-accent/90 text-accent-foreground shadow-sm" : "bg-accent text-accent-foreground")}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between rounded-lg px-[5px]">
          <NavLink to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/d7e6819a-2770-498e-98e0-41a27f75adea.png" alt="Sarvmedia Logo" className="h-20 w-auto object-fill" />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({
            isActive
          }) => cn("text-sm font-medium hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300", isActive && "text-white after:scale-x-100")}>
              Home
            </NavLink>
            <NavLink to="/work" className={({
            isActive
          }) => cn("text-sm font-medium hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300", isActive && "text-white after:scale-x-100")}>
              Our Work
            </NavLink>
            <NavLink to="/about" className={({
            isActive
          }) => cn("text-sm font-medium hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300", isActive && "text-white after:scale-x-100")}>
              About Us
            </NavLink>
            <NavLink to="/contact" className="bg-white text-accent px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity shadow-button">
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white" aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-accent shadow-lg backdrop-blur-md">
          <nav className="flex flex-col p-6 space-y-4 animate-fade-in">
            <NavLink to="/" className={({
          isActive
        }) => cn("text-lg font-medium hover:text-white transition-colors py-1", isActive && "text-white")} onClick={() => setMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/work" className={({
          isActive
        }) => cn("text-lg font-medium hover:text-white transition-colors py-1", isActive && "text-white")} onClick={() => setMobileMenuOpen(false)}>
              Our Work
            </NavLink>
            <NavLink to="/about" className={({
          isActive
        }) => cn("text-lg font-medium hover:text-white transition-colors py-1", isActive && "text-white")} onClick={() => setMobileMenuOpen(false)}>
              About Us
            </NavLink>
            <NavLink to="/contact" className="bg-white text-accent rounded-full text-lg font-medium text-center py-2 hover:opacity-90 transition-opacity" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </NavLink>
          </nav>
        </div>}
    </header>;
};
export default Navbar;