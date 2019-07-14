import { Component, OnInit, Input } from '@angular/core';
import { DateRange } from '../date-range/date-range.component';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'xf-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {

  readonly AWESOME: string = 'awesome';
  readonly SUPER: string = 'super';

  @Input() category: string;

  awesomeRange: DateRange;
  superRange: DateRange;
  rangeErrors: ValidationErrors;

  constructor() { }

  ngOnInit() {}

  updateRange(dateRange: string,  range: DateRange) {
    if (dateRange === this.AWESOME) {
      this.awesomeRange = range;
    } else {
      this.superRange = range;
    }    
    this.rangeErrors = range.errors || [];
  }
}
