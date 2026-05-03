export interface Project {
    id: number;
    titleKey: string;
    descriptionKey: string;
    imageUrl?: string;
    sourceUrl?: string;
    demoUrl?: string;
    category: ProjectCategory;
    featured?: boolean;
    tags: string[];
    year: number;
}

export type ProjectCategory = 'web' | 'mobile' | 'ai' | 'tools' | 'fullstack' | 'data';

export interface Experience {
    id: number;
    titleKey: string;
    company: string;
    location: string;
    period: string;
    descriptionKeys: string[];
    technologies: string[];
    type: 'freelance' | 'full-time' | 'internship';
}

export interface Education {
    id: number;
    degreeKey: string;
    institution: string;
    period: string;
    location: string;
}

export interface SkillCategory {
    titleKey: string;
    skills: Skill[];
}

export interface Skill {
    name: string;
    icon: string;
}

export type Lang = 'en' | 'es';

export interface NavLink {
    labelKey: string;
    sectionId: string;
}

export interface Shape {
    id: number;
    delay: number;
}
