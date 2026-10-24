import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Project } from './models/project';

@Component({
  imports: [Navbar, Hero, Projects],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  developerName = 'Reda';
  jobTitle = 'Backend Developer';
  introduction = 'I build reliable web applications';

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
}
