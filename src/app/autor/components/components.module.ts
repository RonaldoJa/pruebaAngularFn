import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    LoginComponent,
    TableComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports: [
    LoginComponent,
    TableComponent 
  ]
})
export class ComponentsModule { }
