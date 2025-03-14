
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.form 
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-8 md:p-10 shadow-glass border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        
        <div className="space-y-2 mb-6">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone Number (Optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
            placeholder="Your phone number"
          />
        </div>
        
        <div className="space-y-2 mb-8">
          <label htmlFor="message" className="text-sm font-medium">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
            placeholder="Tell us about your project or inquiry"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          <Send size={16} />
        </button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
