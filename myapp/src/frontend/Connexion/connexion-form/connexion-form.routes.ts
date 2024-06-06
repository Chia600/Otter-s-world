import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../../app/app.routes';
import { appConfig } from '../../app/app.config';



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ConnexionFormRoutes{}

export { routes };
