import { NgModule } from "@angular/core";
import { provideClientHydration } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,

    
],
  providers: [provideClientHydration()],
})
export class CarrouselModule {}
