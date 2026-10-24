import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  heading = input<string>('About Me');
  description = input.required<string>();
}
