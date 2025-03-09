import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient() ,
    importProvidersFrom(BrowserAnimationsModule), // Required for Toastr animations
    importProvidersFrom(ToastrModule.forRoot()), // Fix: Provides Toastr configuration globally
    provideRouter([]),

  ]
})
  .catch(err => console.error(err));
