import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports:[NgIf],
  standalone:true,
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {

  @Input() totalCount?:number;
  @Input() pageSize?:number;
  @Output() childPageChanged = new EventEmitter<number>();

  onPageChanged(event: any){
    this.childPageChanged.emit(event.page);
  }

}
