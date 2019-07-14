import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'xf-x-tract',
  templateUrl: './x-tract.component.html',
  styleUrls: ['./x-tract.component.scss']
})
export class XTractComponent implements OnInit {

  @Input() filters: string[] = [];
  selected: string[] = [];
  filtersSelected: boolean = false;

  constructor() { }

  ngOnInit() {}

  setSelected(event: string[]) {
    this.selected = event;
    this.filtersSelected = this.selected.length > 0;
  }
}
