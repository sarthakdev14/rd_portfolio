export interface Project {
  title: string;
  description: string;
  category: 'ML' | 'Frontend';
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface TechCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}