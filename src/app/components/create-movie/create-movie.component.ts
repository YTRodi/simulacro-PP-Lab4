import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
})
export class CreateMovieComponent implements OnInit {
  public title: string = 'Alta de película | Modifcar ';

  public formMovie: FormGroup;

  constructor(private fb: FormBuilder, private movieService: MovieService) {
    this.formMovie = this.fb.group({
      name: new FormControl('', [Validators.required]),
      type: new FormControl('Otros', [Validators.required]),
      releaseDate: new FormControl('', [Validators.required]),
      amountPublic: new FormControl(10, [
        Validators.required,
        Validators.min(10),
        Validators.max(50),
      ]),
      image: new FormControl('', [Validators.required]),
      alt: 'Image movie',
    });
  }

  ngOnInit(): void {}

  sendForm() {
    this.movieService.addMovie(this.formMovie.getRawValue());
    this.formMovie.reset();
  }
}
