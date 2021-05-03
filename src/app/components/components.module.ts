import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { MovieTableComponent } from './movie-table/movie-table.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { CountryTableComponent } from './country-table/country-table.component';
import { CreateActorComponent } from './create-actor/create-actor.component';
import { ActorTableComponent } from './actor-table/actor-table.component';

@NgModule({
  declarations: [
    MovieTableComponent,
    MovieDetailComponent,
    CreateMovieComponent,
    CountryTableComponent,

    CreateActorComponent,
    ActorTableComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [
    MovieTableComponent,
    MovieDetailComponent,
    CreateMovieComponent,
    CountryTableComponent,
    CreateActorComponent,
    ActorTableComponent,
  ],
})
export class ComponentsModule {}
