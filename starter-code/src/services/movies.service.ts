import { Injectable } from "@angular/core";
import {movies} from "../sample-movies"


interface movies {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  genres: Array<string>;
  year: number;
  director: string;
  actors: Array<string>;
  hours: Array<string>;
  room: number;
}

@Injectable()
export class MoviesService {

  movies: Array<movies> = movies;

  getMovies() {
    return this.movies;
  }
  getMovie(id) {
    return movies.find(function (obj) { return obj.id === id; });
  }
}
