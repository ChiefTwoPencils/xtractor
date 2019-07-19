import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Criteria } from '../criteria/criteria.component';
import { FilterByComponent } from '../filter-by/filter-by.component';
import { DateRange } from '../date-range/date-range.component';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'xf-x-tract',
  templateUrl: './x-tract.component.html',
  styleUrls: ['./x-tract.component.scss']
})
export class XTractComponent implements OnInit {

  readonly AWESOME: string = 'awesome';
  readonly SUPER: string = 'super';

  @Input() filters: string[] = [];
  @ViewChild('fb', {static: false}) fb: FilterByComponent;

  awesomeRange: DateRange;
  superRange: DateRange;
  selected: string[] = [];
  filtersSelected: boolean = false;
  criteria: Criteria[] = [];
  greats: string[];
  runnable: boolean = false;
  rangeErrors: ValidationErrors;

  constructor() { }

  ngOnInit() {}

  setSelected(event: string[]) {
    this.updateCriteria(event);
    this.selected = event;
    this.filtersSelected = this.selected.length > 0;
    if (!this.filtersSelected) {
      this.reset();
    }    
    this.updateRunnable();
  }

  setGreatsSelected(event: string[]) {
    this.greats = event;
  }

  updateCriteria(event: string[]) {
    const upperSelected = event.map(s => s.toUpperCase());
    this.criteria = this.criteria
      .filter(c => upperSelected.includes(c.name.toUpperCase()));
  }

  updateRunnable() {
    this.runnable = this.allSelectedAreValid();
  }

  updateRange(dateRange: string, range: DateRange) {
    if (this.AWESOME === dateRange) {
      this.awesomeRange = range;
    } else if (this.SUPER === dateRange) {
      this.superRange = range;
    }
    this.rangeErrors = this.buildErrors();
    this.criteria =  this.buildCriteria();
    this.updateRunnable();
  }  

  allSelectedAreValid(): boolean {
    return this.criteria.length > 0
      && this.criteria.length === this.selected.length;
  }

  clear() {
    this.fb.clear();
    this.reset();
  }

  reset() {
    this.runnable = false;
    this.criteria = [];
  }

  private buildErrors(): ValidationErrors {
    const all: ValidationErrors = {};
    if (this.hasRangeErrors(this.awesomeRange)) {
      all[this.AWESOME] = this.awesomeRange.errors;
    }
    if (this.hasRangeErrors(this.superRange)) {
      all[this.SUPER] = this.superRange.errors;
    }
    return all;
  }

  private buildCriteria(): Criteria[] {
    const c: Criteria[] = [];
    if (this.isValidRange(this.awesomeRange)) {
      c.push(new Criteria(this.AWESOME, this.awesomeRange));
    }
    if (this.isValidRange(this.superRange)) {
      c.push(new Criteria(this.SUPER, this.superRange));
    }
    return c;
  }

  private isValidRange(range: DateRange): boolean {
    return this.checkRange(range, r => r.errors === null);
  }

  private hasRangeErrors(range: DateRange): boolean {
    return this.checkRange(range, r => r.errors !== null);
  }

  private checkRange(range: DateRange, check: (r: DateRange) => boolean): boolean {
    return range && check(range);
  }
}
