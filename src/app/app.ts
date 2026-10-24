import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Project } from './models/project';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Footer } from './components/footer/footer';

@Component({
  imports: [Navbar, Hero, Projects, About, Skills, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  developerName = 'Reda';
  jobTitle = 'Backend Developer';
  introduction = 'I build reliable web applications';

  aboutMe= 'I am a backend developer focused on building reliable and maintainable web applications.';

  mySkills: string[] = [
    'java',
    'Spring Boot',
    'MySQL',
    'REST APIs',
    'Angular',
    'TypeScript'
  ];

  myProjects: Project[] = [
    {
      id: 1,
      title: 'Task Manager API',
      category: 'Back-end',
      description: 'REST API for managing tasks.',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      featured: true,
    },
    {
      id: 2,
      title: 'Portfolio Website',
      category: 'Front-end',
      description: 'My first website using Angular.',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      featured: false,
    },
    {
      id: 3,
      title: 'Inventory API',
      category: 'Back-end',
      description: 'Backend for inventory management.',
      technologies: ['Java', 'Spring Boot'],
      featured: false,
    },
    {
      id: 4,
      title: 'Library API',
      category: 'Back-end',
      description: 'Backend for Library management.',
      technologies: ['Java', 'Spring Boot', 'OpenAPI'],
      featured: false,
    },
  ];

  ownerName='Mohamed Reda El Ghazouani'
}
