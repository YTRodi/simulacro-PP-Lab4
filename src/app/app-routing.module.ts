import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SearchMovieComponent } from './pages/search-movie/search-movie.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { MoviesComponent } from './pages/movies/movies.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'bienvenidos', component: WelcomeComponent },
  { path: 'busqueda-peliculas', component: SearchMovieComponent },
  { path: 'alta-actores', component: ActorsComponent },
  { path: 'alta-peliculas', component: MoviesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'bienvenidos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
