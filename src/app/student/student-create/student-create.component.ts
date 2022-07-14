import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Clazz} from '../../model/Clazz';
import {StudentService} from '../../service/student.service';
import {ClazzService} from '../../service/clazz.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  studentForm: FormGroup = new FormGroup({
    name: new FormControl(),
    score: new FormControl(),
    age: new FormControl(),
    clazzId: new FormControl(),
  });
  obj: any;
  listClazz: Clazz[] = [];
  constructor(private studentService: StudentService,
              private clazzService: ClazzService,
              private router: Router) { }

  ngOnInit() {
    this.clazzService.getAll().subscribe((data) => {
      this.listClazz = data;
    });
  }
  submit() {
    this.obj = {
      name: this.studentForm.value.name,
      age: this.studentForm.value.age,
      score: this.studentForm.value.score,
      clazz: {
        id: this.studentForm.value.clazzId
      }
    };
    this.studentService.save(this.obj).subscribe(() => {
      this.router.navigate(['/student']);
      alert('Thành công');
    }, error => {
      alert('Lỗi');
    }) ;
  }
}
