import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import {StudentListComponent} from '../student-list/student-list.component';
import {StudentCreateComponent} from '../student-create/student-create.component';
import {StudentEditComponent} from '../student-edit/student-edit.component';
import {StudentDeleteComponent} from '../student-delete/student-delete.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    StudentListComponent,
    StudentCreateComponent,
    StudentEditComponent,
    StudentDeleteComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
