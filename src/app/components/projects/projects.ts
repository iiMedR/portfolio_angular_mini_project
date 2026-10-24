import { Component, input } from '@angular/core';
import { Project } from "../../models/project"
import { ProjectCard } from '../project-card/project-card';

@Component({
  imports: [ProjectCard],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  projects = input.required<Project[]>();
}
