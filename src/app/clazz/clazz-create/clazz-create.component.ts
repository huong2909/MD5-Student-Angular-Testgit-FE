import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ClazzService} from '../../service/clazz.service';

@Component({
  selector: 'app-clazz-create',
  templateUrl: './clazz-create.component.html',
  styleUrls: ['./clazz-create.component.css']
})
export class ClazzCreateComponent implements OnInit {
  clazzForm: FormGroup = new FormGroup({
    name: new FormControl(),
  });
  constructor(private clazzService: ClazzService) { }

  ngOnInit() {
  }
  submit() {
    const clazz = this.clazzForm.value;
    this.clazzService.save(clazz).subscribe(() => {
      alert('Thành công');
    }, error => {
      alert('Lỗi');
    }) ;
  }
}
