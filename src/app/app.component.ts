import { Component } from '@angular/core';
import { movies } from './movie';

const MOVIES: movies[] = [
  {name: 'The Godfather', genre: 'Drama/Crime fiction'},
  {name: 'The Dark Knight', genre: 'Action'},
  {name: 'Forrest Gump', genre: 'Comedy-Drama'},
  {name: 'The Lord of the Rings', genre: 'Fantasy'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Best Movies Ever';
  selectedMovie: movies;
  mov = MOVIES; 
  onSelect(MOV: movies): void{
    this.selectedMovie = MOV;
  }
  addMovie(newMovie: string) {
    if (newMovie) {
      this.mov.push({name:newMovie, genre:'other'});
    }
  }
}
