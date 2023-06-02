import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PrimeNgFormsModules } from './modules/primeng-forms-module';

const Modules = [
    ReactiveFormsModule,
    PrimeNgFormsModules
];
  
const Components = [
    // add components which are used in multiple places
];
  
@NgModule({
    // declarations: [Components],
    declarations: [],
    imports: [
      CommonModule,
      Modules,
    ],
    providers: [],
    // exports: [Modules, Components],
    exports: [Modules],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SharedModule { }