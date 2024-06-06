import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { NavbarModule } from './navbar.module';
import { FilterbarComponent } from "../filterbar/filterbar.component";
import { ArticleComponent } from '../article/article.component';
import { ConnexionFormComponent} from "../../Connexion/connexion-form/connexion-form.component";
import { AcceuilComponent } from '../acceuil.component';


@Component({
  selector: 'app-nav',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        // NgModule,
        MaterialModule,
        NavbarModule,
        FilterbarComponent,
        ArticleComponent,
        ConnexionFormComponent,
        AcceuilComponent
    ]
})

export class NavbarComponent {
  title = 'Acceuil'
}