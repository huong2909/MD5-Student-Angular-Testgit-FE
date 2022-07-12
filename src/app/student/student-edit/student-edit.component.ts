import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {ActivatedRoute, ParamMap, Router} from '@angular/router';

import {Clazz} from '../../model/Clazz';
import {StudentService} from '../../service/student.service';
import {ClazzService} from '../../service/clazz.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  studentForm: FormGroup = new FormGroup({
    name: new FormControl(),
    score: new FormControl(),
    age: new FormControl(),
    clazzId: new FormControl(),
  });
  id: number;
  obj: any;
  listClazz: Clazz[] = [];
  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private clazzService: ClazzService,
              private router: Router
              // ActivatedRoute lấy dữ liệu trên đường dẫn
              ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getStudent(this.id);
    });
  }


  ngOnInit() {
    this.clazzService.getAll().subscribe((data) => {
      this.listClazz = data;
    });
  }
  getStudent(id: number) {
    return this.studentService.getById(id).subscribe(student => {
      this.studentForm = new FormGroup({
        name: new FormControl(student.name),
        score: new FormControl(student.score),
        age: new FormControl(student.age),
        clazzId: new FormControl(student.clazz.id),
      });
    });
  }
  update(id: number) {
    this.obj = {
      name: this.studentForm.value.name,
      age: this.studentForm.value.age,
      score: this.studentForm.value.score,
      clazz: {
        id: this.studentForm.value.clazzId
      }
    };
    this.studentService.update(id, this.obj).subscribe(() => {
      this.router.navigate(['/student']);
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
  }

}
