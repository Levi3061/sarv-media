
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, index }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-glass border border-border/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent mb-6">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
