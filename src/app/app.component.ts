import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, CommonModule, AnalogClockComponent],
})
export class AppComponent {
  title = '🌠';
  currentTime: Date = new Date();
  todayDate: Date = new Date();

  constructor() {
    setInterval(() => {
      this.getCurrentTime();
    }, 1000); // Update every second
  }

  getCurrentTime() {
    this.currentTime = new Date();
  }
}
