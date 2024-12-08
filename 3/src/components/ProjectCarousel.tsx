import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  githubLink?: string;
}

interface ProjectCarouselProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectCarousel = ({ projects, onProjectClick }: ProjectCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 2,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 }
    }
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 relative cursor-pointer px-4"
              onClick={() => onProjectClick(project)}
            >
              <div className="relative h-64 rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
      </button>
      
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all"
      >
        <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
      </button>
    </div>
  );
};

export default ProjectCarousel;