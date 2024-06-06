import { Routes } from '@angular/router';
import { AcceuilComponent } from '../acceuil.component';
import { PageConnexionComponent } from '../../Connexion/page-connexion/page-connexion.component';
import { PageArticleComponent } from '../../page-article/page-article.component';

export const routes: Routes = [
        { path: 'acceuil', component: AcceuilComponent },
    { path: 'connexion', component: PageConnexionComponent },
  { path: 'article', component: PageArticleComponent}
];
