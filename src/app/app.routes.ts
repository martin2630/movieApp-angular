import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';

const APP_ROUTES: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'pelicula/:id', component: DetailMovieComponent
  },
  {
    path: 'buscar/:texto', component: BuscarComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'home'
  }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


