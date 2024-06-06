import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { FilterbarModule } from './filterbar.module';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { ArticleComponent } from "../article/article.component";




@Component({
    selector: 'app-filter',
    standalone: true,
    templateUrl: './filterbar.component.html',
    styleUrl: './filterbar.component.css',
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        MaterialModule,
        FilterbarModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        JsonPipe,
        ArticleComponent
    ]
})

export class FilterbarComponent {
  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });
  
  constructor(private _formBuilder: FormBuilder) {
  }
  }
  

//   // Checkbox component
// const checkbox = document.querySelector('.mat-check')