import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AcceuilComponent } from '../Acceuil/acceuil.component';
import { PageConnexionComponent } from '../Connexion/page-connexion/page-connexion.component';
import { PageArticleComponent } from '../page-article/page-article.component';
import { InscriptionComponent } from '../Connexion/Inscription/inscription/inscription.component';

export const routes: Routes = [
      { path: 'acceuil', component: AcceuilComponent },
  { path: 'connexion', component: PageConnexionComponent },
  { path: 'article', component: PageArticleComponent },
  { path: 'inscription', component : InscriptionComponent},
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' }
];


