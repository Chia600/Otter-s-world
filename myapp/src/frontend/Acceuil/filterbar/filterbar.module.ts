import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { MatToolbarModule } from '../../../material.module';
import { provideClientHydration } from '@angular/platform-browser';
 import {MatButtonModule} from '../../../material.module'; 




@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    CommonModule,
    MaterialModule,
    MatButtonModule
  ],
  providers: [provideClientHydration()],
})
export class FilterbarModule { }
