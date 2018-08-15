import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {MovieComponent} from './movie/movie.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: AppComponent},
  {path: 'film', component: MovieComponent}
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
