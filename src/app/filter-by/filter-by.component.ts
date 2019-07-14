import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatSelectionListChange, MatSelectionList } from '@angular/material';

@Component({
  selector: 'xf-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.scss']
})
export class FilterByComponent implements OnInit {

  @Input() 
  private filters: string[] = [];

  @Output() 
  private selected = new EventEmitter<string[]>();

  @ViewChild('options', {static: false}) 
  private options: MatSelectionList;

  constructor() { }

  ngOnInit() {}

  clear(): void {
    this.options.deselectAll();
    this.selected.emit([]);
  }

  selectionChanged(event: MatSelectionListChange): void {
    this.selected.emit(event
      .source
      .selectedOptions
      .selected
      .map(opt => opt.value));
  }
}
