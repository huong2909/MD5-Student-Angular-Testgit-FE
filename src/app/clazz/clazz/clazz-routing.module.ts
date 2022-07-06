import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClazzListComponent} from '../clazz-list/clazz-list.component';
import {ClazzCreateComponent} from '../clazz-create/clazz-create.component';
import {ClazzDeleteComponent} from '../clazz-delete/clazz-delete.component';
import {ClazzEditComponent} from '../clazz-edit/clazz-edit.component';


const routes: Routes = [
  {
    path: '',
    component: ClazzListComponent
  },
  {path: 'create', component: ClazzCreateComponent},
  {path: 'delete/:id', component: ClazzDeleteComponent},
  {path: 'edit/:id', component: ClazzEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClazzRoutingModule { }
