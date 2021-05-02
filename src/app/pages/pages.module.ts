import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { ComponentsModule } from '../components/components.module';

import { SearchMovieComponent } from './search-movie/search-movie.component';

@NgModule({
  declarations: [WelcomeComponent, SearchMovieComponent],
  imports: [CommonModule, ComponentsModule],
})
export class PagesModule {}
