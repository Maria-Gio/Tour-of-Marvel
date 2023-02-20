import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DisplaySerieComponent } from './display-serie/display-serie.component';
import { DisplayComicComponent } from './display-comic/display-comic.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'detail/:id', component: HeroDetailComponent },
{ path: ':id/series/:serieId', component: DisplaySerieComponent },
{ path: ':id/comics/:comicId', component: DisplayComicComponent },
{ path: '**', redirectTo: 'dashboard', pathMatch: 'full' }];
//Si no viene instanciada esta variable, hacemos estao
/**
 * const routes: Routes[]=[{path:'heroes', component: HeroesComponent}]
 */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
