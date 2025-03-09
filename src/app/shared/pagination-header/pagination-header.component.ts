import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports:[CommonModule, RouterModule,NgIf],
  standalone:true,
  selector: 'app-pagination-header',
  templateUrl: './pagination-header.component.html',
  styleUrl: './pagination-header.component.scss'
})
export class PaginationHeaderComponent {
  @Input() pageIndex: number=1;
  @Input() pageSize: number=10;
  @Input() totalCount: number=100;
}
