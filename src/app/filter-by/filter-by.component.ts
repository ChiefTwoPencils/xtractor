import { Component, OnInit, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { MatSelectionListChange } from '@angular/material';

@Component({
  selector: 'xf-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.scss']
})
export class FilterByComponent implements OnInit {

  @Input() filters: string[] = [];
  @Output() selected = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit() {
  }

  selectionChanged(event: MatSelectionListChange): void {
    this.selected.emit(event
      .source
      .selectedOptions
      .selected
      .map(opt => opt.value));
  }

}
