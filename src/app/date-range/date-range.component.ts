import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'xf-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss']
})
export class DateRangeComponent implements OnInit {

  readonly FROM: string = 'from';
  readonly TO: string = 'to';

  @Output() range = new EventEmitter<DateRange>();
  @Input() label: string  ;
  @Input() min: Date = new Date(1935, 0, 1);
  @Input() max: Date = new Date();
  @Input() errors: boolean = true;
  
  private from: FormControl = new FormControl();
  private to: FormControl = new FormControl();  

  hasFrom: boolean = false;
  maxFromDate: Date = this.max;
  minToDate: Date = this.min;
  fromLabel: string;
  toLabel: string;
  rangeForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.to.setValidators(Validators.required);
    this.to.disable();
    this.rangeForm = fb.group({
      to: this.to,
      from: this.from
    }, { validators: this.validateRange });
  }

  ngOnInit() {
    const lowerLabel = this.label.toLocaleLowerCase();
    this.fromLabel = `From ${lowerLabel} date`;
    this.toLabel = `To ${lowerLabel} date`;
  }

  updateRange(which: string, event: MatDatepickerInputEvent<Date>) {
    if (this.FROM === which) {
      this.hasFrom = true;
      this.minToDate = event
        ? event.value
        : this.min; 
      this.to.enable();
    } else {
      this.maxFromDate = event.value;
    }
    this.range.emit(this.asRange());
  }

  asRange() {
    return new DateRange(
      this.from.value,
      this.to.value,
      this.rangeForm.errors
    );
  }

  validateRange({value}): ValidationErrors | null {
    const to = value.to;
    const from = value.from;
    if (from && !to) {
      return { toRequired: true };
    }
    if (to < from) {
      return { toBeforeFrom: true};
    } 
  }
}

export class DateRange {
  from: Date;
  to: Date;
  errors: ValidationErrors;

  constructor(from: Date, to: Date, errors: ValidationErrors) {
    this.from = from;
    this.to = to;
    this.errors = errors;
  }
}
