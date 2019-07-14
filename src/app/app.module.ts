import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { 
  MatSelectModule, 
  MatCheckboxModule, 
  MatListModule, 
  MatNativeDateModule,
  MatFormFieldModule,
} from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { FilterByComponent } from './filter-by/filter-by.component';
import { XTractComponent } from './x-tract/x-tract.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { SummaryComponent } from './summary/summary.component';
import { DateRangeComponent } from './date-range/date-range.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilterByComponent,
    XTractComponent,
    CriteriaComponent,
    SummaryComponent,
    DateRangeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatSelectModule,
    MatListModule,  
    MatCheckboxModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
