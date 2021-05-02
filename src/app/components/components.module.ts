import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { MovieTableComponent } from './movie-table/movie-table.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';

@NgModule({
  declarations: [
    MovieTableComponent,
    MovieDetailComponent,
    CreateMovieComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [MovieTableComponent, MovieDetailComponent, CreateMovieComponent],
})
export class ComponentsModule {}
