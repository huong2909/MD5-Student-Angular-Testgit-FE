import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClazzRoutingModule } from './clazz-routing.module';
import {ClazzListComponent} from '../clazz-list/clazz-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ClazzCreateComponent} from '../clazz-create/clazz-create.component';
import {ClazzDeleteComponent} from '../clazz-delete/clazz-delete.component';
import {ClazzEditComponent} from '../clazz-edit/clazz-edit.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ClazzListComponent,
    ClazzCreateComponent,
    ClazzDeleteComponent,
    ClazzEditComponent
  ],
  imports: [
    CommonModule,
    ClazzRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ClazzModule { }
