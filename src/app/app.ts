import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';

@Component({
  imports: [Navbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  developerName = 'Reda';
  jobTitle = 'Backend Developer';
  introduction = 'I build reliable web applications';
}
