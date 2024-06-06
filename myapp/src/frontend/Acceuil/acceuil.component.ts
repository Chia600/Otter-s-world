import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { FilterbarComponent } from "./filterbar/filterbar.component";
import { ArticleComponent } from "./article/article.component";
import { CarouselComponent } from './carrousel/carrousel.component';

@Component({
    selector: 'app-acceuil',
    standalone: true,
    templateUrl: './acceuil.component.html',
    styleUrl: './acceuil.component.css',
    encapsulation: ViewEncapsulation.Emulated,
    imports: [NavbarComponent, FilterbarComponent, ArticleComponent, CarouselComponent]
})
export class AcceuilComponent {
    title = 'Acceuil';
}
