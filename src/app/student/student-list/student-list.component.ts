import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/Student';

import {FormControl, FormGroup} from '@angular/forms';

import {Clazz} from '../../model/Clazz';
import {StudentService} from '../../service/student.service';
import {ClazzService} from '../../service/clazz.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  student: Student[] = [];
  listClazz: Clazz[] = [];
  studentForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    clazzId: new FormControl(''),
    from: new FormControl(''),
    to: new FormControl(''),
  });
  constructor(private studentService: StudentService,
              private clazzService: ClazzService) { }

  ngOnInit() {
    this.getClazz();
    this.getAll();
  }
  getClazz() {
    this.clazzService.getAll().subscribe((data) => {
      this.listClazz = data;
    });
  }
  getAll() {
    this.studentService.getAll().subscribe(result => {
      // @ts-ignore
      this.student = result;
      console.log(result);
      // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log(error);
    });
  }
  searchByName() {
    // @ts-ignore
    const name = this.studentForm.value.name;
    // @ts-ignore
    this.studentService.getByName(name).subscribe(result => {
      // @ts-ignore
      this.student = result.content;
      console.log(result);
    });
  }
  searchByClazzId() {
    // @ts-ignore
    const id = this.studentForm.value.clazzId;
    // @ts-ignore
    this.studentService.getByClazzId(id).subscribe(result => {
      // @ts-ignore
      this.student = result;
      console.log(result);
    });
  }
  searchByScore() {
    // @ts-ignore
    const from = this.studentForm.value.from;
    const to = this.studentForm.value.to;
    // @ts-ignore
    this.studentService.getByScore(from, to).subscribe(result => {
      // @ts-ignore
      this.student = result;
      console.log(result);
    });
  }
}
