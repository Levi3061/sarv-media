
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
import { Skeleton } from "@/components/ui/skeleton";

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

// Hardcoded image URLs for fallback
const fallbackIcons: Record<string, string> = {
  "1639776145": "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/91/2d/8a/912d8a2f-c8dd-47e0-c34c-22350741e2a7/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/100x100bb.jpg",
  "1542737827": "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/ed/07/50/ed07506f-243a-6e27-1e59-c8f76150943d/AppIcon-1x_U007emarketing-0-6-0-0-85-220.png/100x100bb.jpg",
  "1453533306": "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/d2/e1/67/d2e1673e-4c96-fd04-adef-d6b64825e927/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/100x100bb.jpg",
  "6478919458": "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/50/15/38/501538fc-dc19-80bf-c75f-9d6e7c0c3e69/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/100x100bb.jpg",
  "1639880516": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/13/ea/ce/13eace25-8f6f-5f9d-09de-04eecae87f71/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/100x100bb.jpg",
  "6444100286": "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/c7/8a/76/c78a76e0-d1dd-37e2-c1b1-9abab5642a92/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/100x100bb.jpg",
  "1621536309": "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/c3/c3/6c/c3c36c37-5d20-b073-9e95-4fe3e5a4b8c1/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/100x100bb.jpg",
  "1344777233": "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/3c/f6/9b/3cf69b53-2516-3a6f-d5ca-4aee5e71a67a/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/100x100bb.jpg"
};

interface ProjectsProps {
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  // Initialize with fallback images directly
  const [projectsWithIcons, setProjectsWithIcons] = useState<Project[]>(() => 
    projects.map(project => ({
      ...project,
      loading: false, // Start with loading false since we have fallbacks
      imageSrc: fallbackIcons[project.appId] // Directly use fallback
    }))
  );

  useEffect(() => {
    const fetchAppIcons = async () => {
      try {
        // Fetch all in parallel but don't wait for results
        projects.forEach(async (project, index) => {
          try {
            console.log(`Fetching icon for ${project.name} with ID: ${project.appId}`);
            
            // Only update loading state for this specific item
            setProjectsWithIcons(prev => {
              const updated = [...prev];
              updated[index] = {...updated[index], loading: true};
              return updated;
            });
            
            // Try fetching from iTunes API
            const response = await fetch(
              `https://itunes.apple.com/lookup?id=${project.appId}`,
              { mode: 'cors' }
            );
            
            if (!response.ok) {
              throw new Error(`API response not OK: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.results && data.results.length > 0 && data.results[0].artworkUrl100) {
              console.log(`Successfully fetched icon for ${project.name}`);
              
              // Only update this specific item
              setProjectsWithIcons(prev => {
                const updated = [...prev];
                updated[index] = {
                  ...updated[index], 
                  imageSrc: data.results[0].artworkUrl100,
                  loading: false
                };
                return updated;
              });
            } else {
              // API didn't return an image, ensure fallback is used
              setProjectsWithIcons(prev => {
                const updated = [...prev];
                updated[index] = {
                  ...updated[index], 
                  loading: false
                };
                return updated;
              });
            }
          } catch (error) {
            console.error(`Failed to fetch icon for ${project.name}:`, error);
            // Ensure loading is set to false and fallback is used
            setProjectsWithIcons(prev => {
              const updated = [...prev];
              updated[index] = {
                ...updated[index], 
                loading: false
              };
              return updated;
            });
          }
        });
      } catch (error) {
        console.error("Error in fetchAppIcons:", error);
      }
    };

    // Call the fetch function
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
                        ) : (
                          <Avatar className="w-24 h-24 rounded-xl overflow-hidden">
                            <AvatarImage 
                              src={project.imageSrc} 
                              alt={project.name} 
                              className="object-cover"
                              onError={(e) => {
                                // If image fails to load, use fallback
                                console.log(`Image error for ${project.name}, using fallback`);
                                const target = e.target as HTMLImageElement;
                                target.onerror = null; // Prevent infinite loop
                                target.src = fallbackIcons[project.appId] || '';
                              }}
                            />
                            <AvatarFallback className="text-xl bg-secondary">
                              {project.name.substring(0, 2)}
                            </AvatarFallback>
                          </Avatar>
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
