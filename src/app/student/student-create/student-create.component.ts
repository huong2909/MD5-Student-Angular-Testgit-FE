import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Clazz} from '../../model/Clazz';
import {StudentService} from '../../service/student.service';
import {ClazzService} from '../../service/clazz.service';
import {Router} from '@angular/router';
import {Student} from '../../model/Student';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  studentForm: FormGroup;

    // = new FormGroup({
    // name: new FormControl(),
    // score: new FormControl(),
    // age: new FormControl(),
    // clazzId: new FormControl(),
  // });
  obj: any;
  listClazz: Clazz[] = [];
  constructor(private studentService: StudentService,
              private clazzService: ClazzService,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.studentForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      score: ['', Validators.required],
      age: [''],
      clazz: ['']
    });
    this.clazzService.getAll().subscribe((data) => {
      this.listClazz = data;
    });
  }
  submit() {
    console.log(this.studentForm.value);
    this.studentService.save(this.studentForm.value).subscribe((student: Student) => {
      this.studentForm.reset();
      alert('Thành công');
    }, error => {
      alert('Lỗi');
    }) ;
  }
  goBack() {
    this.router.navigate(['/student']);
  }
}
