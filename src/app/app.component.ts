import { Component } from '@angular/core';

@Component({
  selector: 'xf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'x-filter';
  filters: string[] = [
    "Super", "Great", "Awesome", "Terrific"
  ];
  selected: string[] = [];

  setSelected(event: string[]) {
    this.selected = event;
  }
}
