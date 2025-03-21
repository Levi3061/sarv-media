
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
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Project {
  name: string;
  description: string;
  appStoreUrl: string;
  appId: string;
  imageSrc: string;
}

const projects: Project[] = [
  {
    name: "Sociallize App",
    description: "A social networking platform connecting people with similar interests.",
    appStoreUrl: "https://apps.apple.com/in/app/sociallize-app/id1639776145",
    appId: "1639776145",
    imageSrc: "/lovable-uploads/2065dd3b-0aff-4920-9b35-4f98c95fee2e.png" // Duuliye image
  },
  {
    name: "Outgoer",
    description: "An app for discovering local events and activities.",
    appStoreUrl: "https://apps.apple.com/in/app/outgoer/id1542737827",
    appId: "1542737827",
    imageSrc: "/lovable-uploads/96095c39-57a4-4d1e-a5fa-f3922286bad3.png" // Habit Tracker image
  },
  {
    name: "Turbo",
    description: "A ride-hailing and transportation service app.",
    appStoreUrl: "https://apps.apple.com/us/app/%D8%AA%D9%88%D8%B1%D8%A8%D9%88-turbo-request-a-ride/id1453533306",
    appId: "1453533306",
    imageSrc: "/lovable-uploads/76389a43-a939-4897-a9b5-867c463ea66b.png" // Turbo image
  },
  {
    name: "Habit Tracker & Planner",
    description: "An app for tracking and building daily habits and routines.",
    appStoreUrl: "https://apps.apple.com/in/app/habit-tracker-planner/id6478919458",
    appId: "6478919458",
    imageSrc: "/lovable-uploads/96095c39-57a4-4d1e-a5fa-f3922286bad3.png" // Habit Tracker image
  },
  {
    name: "Duuliye",
    description: "A specialized app for community engagement and organization.",
    appStoreUrl: "https://apps.apple.com/in/app/duuliye/id1639880516",
    appId: "1639880516",
    imageSrc: "/lovable-uploads/2065dd3b-0aff-4920-9b35-4f98c95fee2e.png" // Duuliye image
  },
  {
    name: "MODV AI",
    description: "An AI-powered app for visual content creation and editing.",
    appStoreUrl: "https://apps.apple.com/us/app/modv-ai/id6444100286",
    appId: "6444100286",
    imageSrc: "/lovable-uploads/d7e7b417-9c25-4328-9723-d7f79a6ca8ff.png" // MODV AI image
  },
  {
    name: "Max Deal",
    description: "A shopping app with exclusive deals and discounts.",
    appStoreUrl: "https://apps.apple.com/us/app/max-deals/id1621536309",
    appId: "1621536309",
    imageSrc: "/lovable-uploads/fc6144d1-22be-48bc-814e-e8ff3df95dc3.png" // Max Deal image
  },
  {
    name: "قرعة",
    description: "An Arabic app for lottery and random selection.",
    appStoreUrl: "https://apps.apple.com/us/app/%D9%82%D8%B1%D8%B9%D8%A9/id1344777233",
    appId: "1344777233",
    imageSrc: "/lovable-uploads/f690dfee-fdd0-4200-a319-c671c1439af2.png" // قرعة image
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
                  className="h-full"
                >
                  <Card className="border border-border/50 shadow-glass backdrop-blur-sm h-full flex flex-col">
                    <CardContent className="p-4 flex flex-col items-center">
                      <div className="flex justify-center items-center mb-4 w-24 h-24">
                        <Avatar className="w-24 h-24 rounded-xl overflow-hidden">
                          <AvatarImage 
                            src={project.imageSrc} 
                            alt={project.name} 
                            className="object-cover"
                          />
                          <AvatarFallback className="text-xl bg-secondary">
                            {project.name.substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <h3 className="font-semibold text-lg mb-2 text-center">{project.name}</h3>
                      <p className="text-muted-foreground text-sm text-center">{project.description}</p>
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
