import { Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
   {path:'', component:HomeComponent},
  {path:'test-error', component:TestErrorComponent},
  {path:'not-found', component:NotFoundComponent},
  {path:'server-error', component:ServerErrorComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
];
