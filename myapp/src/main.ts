import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { appConfig } from './frontend/app/app.config';
import { AppComponent } from './frontend/app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err))
