import { Component, EventEmitter, Input, Output } from '@angular/core';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'shared-paginator',
  templateUrl: './paginator.component.html',
})
export class PaginatorComponent {
  
  public first: number = 0;
  @Input() rows: number = 10;
  @Input() totalRecords: number = 10;
  @Output() paginatorChangePage = new EventEmitter<number>();

  onPageChange(event:  PageEvent | any ) {
    console.log({event});
    this.first = event.first;
    this.rows = event.rows;
    this.paginatorChangePage.emit(event.page + 1)
  }

}
