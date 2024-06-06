import { Component } from '@angular/core';
import { ConnexionFormComponent } from "../connexion-form/connexion-form.component";
import { NavbarComponent } from "../../Acceuil/navbar/navbar.component";

@Component({
    selector: 'app-page-connexion',
    standalone: true,
    templateUrl: './page-connexion.component.html',
    styleUrl: './page-connexion.component.css',
    imports: [ConnexionFormComponent, NavbarComponent]
})
export class PageConnexionComponent {

}
