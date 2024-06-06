import { Component } from '@angular/core';
import { FilterbarComponent } from "../Acceuil/filterbar/filterbar.component";
import { CarouselComponent } from "../Acceuil/carrousel/carrousel.component";
import { ArticleComponent } from "../Acceuil/article/article.component";
import { NavbarComponent } from "../Acceuil/navbar/navbar.component";

@Component({
    selector: 'app-page-article',
    standalone: true,
    templateUrl: './page-article.component.html',
    styleUrl: './page-article.component.css',
    imports: [FilterbarComponent, CarouselComponent, ArticleComponent, NavbarComponent]
})
export class PageArticleComponent {

}
