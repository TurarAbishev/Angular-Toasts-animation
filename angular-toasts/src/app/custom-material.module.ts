import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
const MODULES = [
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule,
  MatButtonModule,
  MatTabsModule,
  MatCheckboxModule,
  MatIconModule,
  MatExpansionModule,
  MatRadioModule,
  MatStepperModule,
  MatTableModule,
  MatDividerModule,
  MatProgressBarModule,
  MatPaginatorModule,
  MatSliderModule,
  MatSlideToggleModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MODULES],
  exports: [...MODULES],
  providers: [],
})
export class CustomMaterialModule {}
