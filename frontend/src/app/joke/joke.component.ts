import { Component } from '@angular/core';
import { JokeService } from '../services/joke.service';
import { Joke } from '../services/joke.service';
import { MatProgressSpinner, MatSpinner } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
  imports: [
    CommonModule,
    MatProgressSpinner,
    MatIconModule
  ]
})
export class JokeComponent {
  joke: Joke | null = null;
  isLoading = false;
  error: string | null = null;

  constructor(private jokeService: JokeService) {}

  fetchJoke(): void {
    this.isLoading = true;
    this.error = null;
    
    this.jokeService.getRandomJoke().subscribe({
      next: (joke) => {
        this.joke = joke;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.isLoading = false;
      }
    });
  }
}