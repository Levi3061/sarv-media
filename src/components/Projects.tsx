import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  name: string;
  description: string;
  appStoreUrl: string;
  imageSrc: string;
}

const projects: Project[] = [
  {
    name: "Sociallize App",
    description: "A social networking platform connecting people with similar interests.",
    appStoreUrl: "https://apps.apple.com/in/app/sociallize-app/id1639776145",
    imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Outgoer",
    description: "An app for discovering local events and activities.",
    appStoreUrl: "https://apps.apple.com/in/app/outgoer/id1542737827",
    imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Turbo",
    description: "A performance optimization tool for mobile devices.",
    appStoreUrl: "https://apps.apple.com/in/app/outgoer/id1542737827",
    imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Habit Tracker & Planner",
    description: "An app for tracking and building daily habits and routines.",
    appStoreUrl: "https://apps.apple.com/in/app/habit-tracker-planner/id6478919458",
    imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Duuliye",
    description: "A specialized app for community engagement and organization.",
    appStoreUrl: "https://apps.apple.com/in/app/duuliye/id1639880516",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "MODV AI",
    description: "An AI-powered app for visual content creation and editing.",
    appStoreUrl: "https://apps.apple.com/us/app/modv-ai/id6444100286",
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Max Deal",
    description: "A shopping app with exclusive deals and discounts.",
    appStoreUrl: "https://apps.apple.com/us/app/max-deals/id1621536309",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "قرعة",
    description: "An Arabic app for lottery and random selection.",
    appStoreUrl: "https://apps.apple.com/us/app/%D9%82%D8%B1%D8%B9%D8%A9/id1344777233",
    imageSrc: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

interface ProjectsProps {
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-6 md:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-medium rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Projects
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Recent iOS App Development Projects
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Explore our portfolio of successful mobile applications that showcase our expertise and innovation.
          </motion.p>
        </motion.div>

        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="border border-border/50 shadow-glass backdrop-blur-sm h-full flex flex-col">
                    <CardContent className="p-4">
                      <div className="aspect-video bg-secondary mb-4 rounded-md overflow-hidden">
                        <img 
                          src={project.imageSrc} 
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                      <p className="text-muted-foreground text-sm">{project.description}</p>
                    </CardContent>
                    <CardFooter className="px-4 pb-4 pt-0 mt-auto">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        asChild
                      >
                        <a 
                          href={project.appStoreUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2"
                        >
                          See the project <ExternalLink size={14} />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="static translate-y-0 h-10 w-10" />
            <CarouselNext className="static translate-y-0 h-10 w-10" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
