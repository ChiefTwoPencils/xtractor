import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatSelectionList } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'xf-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  private readonly ALL: string = "all";

  @Input() all: boolean = true;
  @Input() multiple: boolean = false;
  @Input() options: string[];
  @Output() selected = new EventEmitter<string[]>();
  @ViewChild('selectAll', {static: false}) selectAll: MatOption;

  private selectForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.selectForm = fb.group({
      selector: ['']
    });
  }

  ngOnInit() {}

  get formLength() {
    return this.selectForm.controls
      .selector
      .value
      .length;
  }

  get equalLengths() {
    return this.formLength == this.options.length;
  }

  get isAll() {
    return this.all && this.selectAll.selected;
  }

  toggleSingle() {
    if (this.isAll) {
      this.selectAll.deselect();
    } 

    this.selected.emit(this.selectForm.controls
      .selector
      .value
    );
  }

  toggleAll(): void {
    let patch: string[] = [];
    let result: string[] = [];

    if (this.isAll) {
      result = this.options;
      patch = [...result, this.ALL];
    }

    this.selectForm.controls
      .selector
      .patchValue(patch);
    this.selected.emit(result);
  }
}
