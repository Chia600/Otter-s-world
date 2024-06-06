
import {Component} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NavbarComponent } from "../../../Acceuil/navbar/navbar.component";
import { ConnexionFormComponent } from '../../connexion-form/connexion-form.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../api.service'; 
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NavbarComponent, ConnexionFormComponent, CommonModule,],
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  registerEmail: string = '';
  registerPassword: string = '';


  constructor(private authService: AuthService) { }

  Register(event: Event) {
    event.preventDefault();
    this.authService.register(this.registerEmail, this.registerPassword).subscribe(response => {
      console.log('Register response:', response);
    }, error => {
      console.error('Register error:', error);
    });
  }
}
