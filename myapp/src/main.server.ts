import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './frontend/app/app.config';
import { AppComponent } from './frontend/app/app.component';

const bootstrap = () => bootstrapApplication(AppComponent, appConfig);

export default bootstrap;
