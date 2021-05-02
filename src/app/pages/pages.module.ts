import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { ComponentsModule } from '../components/components.module';

import { SearchMovieComponent } from './search-movie/search-movie.component';
import { ActorsComponent } from './actors/actors.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WelcomeComponent, SearchMovieComponent, ActorsComponent],
  imports: [CommonModule, ComponentsModule, SharedModule],
})
export class PagesModule {}
