import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private apiUrl = 'http://localhost:8000/api/joke/';

  constructor(private http: HttpClient) { }

  getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching joke:', error);
        return throwError(() => new Error('Failed to fetch joke. Please try again later.'));
      })
    );
  }
}