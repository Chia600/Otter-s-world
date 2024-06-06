import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AcceuilComponent } from "../Acceuil/acceuil.component";
import { PageConnexionComponent } from "../Connexion/page-connexion/page-connexion.component";
import { PageArticleComponent } from '../page-article/page-article.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, AcceuilComponent, PageConnexionComponent, PageArticleComponent]
})
export class AppComponent {
  title = 'routing-app';
}
