export interface Project {
  title: string;
  website: string;
  role: string;
  techStack: string[];
  description: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  date: string;
  url: string;
  abstract: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}