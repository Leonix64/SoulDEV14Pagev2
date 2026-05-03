import { Injectable } from '@angular/core';
import { Project, Experience, Education, SkillCategory, NavLink } from '../interfaces/portfolio.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  getNavLinks(): NavLink[] {
    return [
      { labelKey: 'nav.about',      sectionId: 'about' },
      { labelKey: 'nav.experience', sectionId: 'experience' },
      { labelKey: 'nav.projects',   sectionId: 'projects' },
      { labelKey: 'nav.stack',      sectionId: 'stack' },
      { labelKey: 'nav.contact',    sectionId: 'contact' },
    ];
  }

  getExperiences(): Experience[] {
    return [
      {
        id: 1,
        titleKey: 'experience.worknest.title',
        company: 'WorkNest',
        location: 'Remote, Mexico',
        period: 'Aug 2023 – Dec 2023',
        type: 'internship',
        descriptionKeys: [
          'experience.worknest.desc1',
          'experience.worknest.desc2',
          'experience.worknest.desc3',
          'experience.worknest.desc4',
        ],
        technologies: ['Java', 'Spring Boot', 'MySQL', 'Goliant', 'Scrum', 'Git'],
      },
      {
        id: 2,
        titleKey: 'experience.helguera.title',
        company: 'Helguera',
        location: 'Durango, Mexico',
        period: '2023',
        type: 'internship',
        descriptionKeys: [
          'experience.helguera.desc1',
          'experience.helguera.desc2',
          'experience.helguera.desc3',
        ],
        technologies: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'REST APIs'],
      },
      {
        id: 3,
        titleKey: 'experience.donponpeyo.title',
        company: 'Don Ponpeyo',
        location: 'Durango, Mexico',
        period: '2023',
        type: 'internship',
        descriptionKeys: [
          'experience.donponpeyo.desc1',
          'experience.donponpeyo.desc2',
          'experience.donponpeyo.desc3',
        ],
        technologies: ['Java', 'Spring Boot', 'MySQL', 'Process Modeling'],
      },
    ];
  }

  getEducation(): Education[] {
    return [
      {
        id: 1,
        degreeKey: 'education.unipoli.degree',
        institution: 'Universidad Politécnica de Durango',
        period: '2020 – 2024',
        location: 'Durango, Mexico',
      },
    ];
  }

  getProjects(): Project[] {
    return [
      {
        id: 1,
        titleKey: 'projects.worknest.title',
        descriptionKey: 'projects.worknest.desc',
        category: 'fullstack',
        featured: true,
        year: 2023,
        tags: ['Spring Boot', 'MySQL', 'Goliant', 'Java', 'Scrum'],
      },
      {
        id: 2,
        titleKey: 'projects.rainflow.title',
        descriptionKey: 'projects.rainflow.desc',
        category: 'data',
        featured: false,
        year: 2023,
        tags: ['Python', 'MySQL', 'Data Analysis', 'Pandas'],
      },
      {
        id: 3,
        titleKey: 'projects.helguera.title',
        descriptionKey: 'projects.helguera.desc',
        category: 'fullstack',
        featured: false,
        year: 2023,
        tags: ['Full Stack', 'MySQL', 'JavaScript', 'Spring Boot'],
      },
      {
        id: 4,
        titleKey: 'projects.donponpeyo.title',
        descriptionKey: 'projects.donponpeyo.desc',
        category: 'web',
        featured: false,
        year: 2023,
        tags: ['Spring Boot', 'MySQL', 'Java', 'REST'],
      },
    ];
  }

  getStack(): SkillCategory[] {
    return [
      {
        titleKey: 'stack.backend',
        skills: [
          { name: 'Java',        icon: 'cafe-outline' },
          { name: 'Spring Boot', icon: 'flash-outline' },
          { name: 'Python',      icon: 'logo-python' },
          { name: 'FastAPI',     icon: 'server-outline' },
          { name: 'Node.js',     icon: 'logo-nodejs' },
          { name: 'REST APIs',   icon: 'globe-outline' },
        ],
      },
      {
        titleKey: 'stack.databases',
        skills: [
          { name: 'MySQL',      icon: 'server' },
          { name: 'PostgreSQL', icon: 'server-outline' },
          { name: 'Firebase',   icon: 'flame-outline' },
        ],
      },
      {
        titleKey: 'stack.data',
        skills: [
          { name: 'Pandas',      icon: 'analytics-outline' },
          { name: 'NumPy',       icon: 'calculator-outline' },
          { name: 'Matplotlib',  icon: 'bar-chart-outline' },
          { name: 'Data Mining', icon: 'search-outline' },
        ],
      },
      {
        titleKey: 'stack.devops',
        skills: [
          { name: 'Git',     icon: 'logo-github' },
          { name: 'Docker',  icon: 'cube-outline' },
          { name: 'Postman', icon: 'send-outline' },
          { name: 'Scrum',   icon: 'people-outline' },
        ],
      },
    ];
  }
}
