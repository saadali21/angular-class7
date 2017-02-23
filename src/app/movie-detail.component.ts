import { Component , Input } from '@angular/core';
import { movies } from './movie';
@Component({
    selector: 'mov-detail',
    templateUrl : './movie-detail.html',
    styleUrls: ['./app.component.css']
})

export class MovieDetailComponent {
    @Input() 
    MOV: movies;
}