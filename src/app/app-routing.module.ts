import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from './student/student-list/student-list.component';
import {StudentCreateComponent} from './student/student-create/student-create.component';
import {StudentDeleteComponent} from './student/student-delete/student-delete.component';
import {StudentEditComponent} from './student/student-edit/student-edit.component';


const routes: Routes = [
  {
    path: 'student',
    loadChildren: () => import('./student/student/student.module').then(module => module.StudentModule)
  },
  {
    path: 'clazz',
    loadChildren: () => import('./clazz/clazz/clazz.module').then(module => module.ClazzModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
