import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  developerName = input.required<string>();
  jobTitle = input.required<string>();
  introduction = input.required<string>();

  profileImage = input<string>('https://placehold.co/200');
}
