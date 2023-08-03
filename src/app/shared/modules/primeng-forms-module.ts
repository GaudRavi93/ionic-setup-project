import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';

const PrimeNgModules = [
    InputTextModule,
];

@NgModule({
    imports: [PrimeNgModules],
    exports: [PrimeNgModules],
})

export class PrimeNgFormsModules { }