import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DateRange } from '../date-range/date-range.component';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'xf-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {

  @Input() category: string;

  constructor() { }

  ngOnInit() {}
}

export class Criteria {
  name: string;
  details: any;

  constructor(name: string, details: any) {
    this.name = name;
    this.details = details;
  }
}
