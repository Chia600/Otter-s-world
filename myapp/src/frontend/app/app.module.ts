import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { ConnexionFormComponent } from '../Connexion/connexion-form/connexion-form.component'
import { InscriptionComponent } from '../Connexion/Inscription/inscription/inscription.component'

@NgModule({
  imports: [BrowserModule,HttpClientModule,FormsModule],
  declarations: [AppComponent,ConnexionFormComponent,InscriptionComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
