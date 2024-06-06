import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { MatToolbarModule } from '../../../material.module';
import {provideClientHydration} from '@angular/platform-browser';




@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    CommonModule,
    MaterialModule,
  ],
  providers: [provideClientHydration()],
})
export class NavbarModule { }
