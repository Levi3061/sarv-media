
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, LoaderCircle } from 'lucide-react';
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
  imageSrc?: string;
  loading?: boolean;
}

const projects: Project[] = [
  {
    name: "Sociallize App",
    description: "A social networking platform connecting people with similar interests.",
    appStoreUrl: "https://apps.apple.com/in/app/sociallize-app/id1639776145",
    appId: "1639776145"
  },
  {
    name: "Outgoer",
    description: "An app for discovering local events and activities.",
    appStoreUrl: "https://apps.apple.com/in/app/outgoer/id1542737827",
    appId: "1542737827"
  },
  {
    name: "Turbo",
    description: "A ride-hailing and transportation service app.",
    appStoreUrl: "https://apps.apple.com/us/app/%D8%AA%D9%88%D8%B1%D8%A8%D9%88-turbo-request-a-ride/id1453533306",
    appId: "1453533306"
  },
  {
    name: "Habit Tracker & Planner",
    description: "An app for tracking and building daily habits and routines.",
    appStoreUrl: "https://apps.apple.com/in/app/habit-tracker-planner/id6478919458",
    appId: "6478919458"
  },
  {
    name: "Duuliye",
    description: "A specialized app for community engagement and organization.",
    appStoreUrl: "https://apps.apple.com/in/app/duuliye/id1639880516",
    appId: "1639880516"
  },
  {
    name: "MODV AI",
    description: "An AI-powered app for visual content creation and editing.",
    appStoreUrl: "https://apps.apple.com/us/app/modv-ai/id6444100286",
    appId: "6444100286"
  },
  {
    name: "Max Deal",
    description: "A shopping app with exclusive deals and discounts.",
    appStoreUrl: "https://apps.apple.com/us/app/max-deals/id1621536309",
    appId: "1621536309"
  },
  {
    name: "قرعة",
    description: "An Arabic app for lottery and random selection.",
    appStoreUrl: "https://apps.apple.com/us/app/%D9%82%D8%B1%D8%B9%D8%A9/id1344777233",
    appId: "1344777233"
  }
];

interface ProjectsProps {
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  const [projectsWithIcons, setProjectsWithIcons] = useState<Project[]>(
    projects.map(project => ({ ...project, loading: true }))
  );

  useEffect(() => {
    const fetchAppIcons = async () => {
      const updatedProjects = [...projectsWithIcons];
      
      for (let i = 0; i < updatedProjects.length; i++) {
        try {
          const response = await fetch(
            `https://itunes.apple.com/lookup?id=${updatedProjects[i].appId}`
          );
          const data = await response.json();
          
          if (data.results && data.results.length > 0) {
            // Get the highest resolution icon (100x100)
            updatedProjects[i].imageSrc = data.results[0].artworkUrl100;
            // Remove the loading state
            updatedProjects[i].loading = false;
          }
        } catch (error) {
          console.error(`Failed to fetch icon for ${updatedProjects[i].name}:`, error);
          updatedProjects[i].loading = false;
        }
      }
      
      setProjectsWithIcons(updatedProjects);
    };

    fetchAppIcons();
  }, []);

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
            {projectsWithIcons.map((project, index) => (
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
                        {project.loading ? (
                          <div className="w-24 h-24 rounded-xl bg-secondary flex items-center justify-center">
                            <LoaderCircle className="h-8 w-8 animate-spin text-muted-foreground" />
                          </div>
                        ) : project.imageSrc ? (
                          <Avatar className="w-24 h-24 rounded-xl overflow-hidden">
                            <AvatarImage src={project.imageSrc} alt={project.name} className="object-cover" />
                            <AvatarFallback className="text-xl bg-secondary">
                              {project.name.substring(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                        ) : (
                          <div className="w-24 h-24 rounded-xl bg-secondary flex items-center justify-center text-xl">
                            {project.name.substring(0, 2)}
                          </div>
                        )}
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
