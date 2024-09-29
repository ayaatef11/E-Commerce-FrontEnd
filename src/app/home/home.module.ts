import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../core/pipes/search.pipe';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    HomeComponent,
    CommonModule,
    CarouselModule,
    RouterModule,
    FormsModule,
    SearchPipe
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
