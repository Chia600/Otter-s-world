
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthService } from '../../api.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-connexion-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './connexion-form.component.html',
  styleUrl: './connexion-form.component.css'
})
export class ConnexionFormComponent {
      loginEmail: string = '';
  loginPassword: string = '';
  loginMessage: string = '';


  constructor(private authService: AuthService, private location: Location) {}

   login(): void {
    this.authService.login(this.loginEmail, this.loginPassword).subscribe(result => {
      if (result.success) {
        this.location.path(); // Navigate to a protected route after login
      } else if (result.errors) {
        this.loginMessage = result.errors.map((e: { msg: any; }) => e.msg).join(', ');
      } else {
        this.loginMessage = result.message;
      }
    });
  }
}



