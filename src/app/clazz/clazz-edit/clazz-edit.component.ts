import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ClazzService} from '../../service/clazz.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-clazz-edit',
  templateUrl: './clazz-edit.component.html',
  styleUrls: ['./clazz-edit.component.css']
})
export class ClazzEditComponent implements OnInit {
  clazzForm: FormGroup;
  id: number;
  constructor(private clazzService: ClazzService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getClazz(this.id);
    });
  }

  ngOnInit() {
  }
  getClazz(id: number) {
    return this.clazzService.getById(id).subscribe(clazz => {
      this.clazzForm = new FormGroup({
        name: new FormControl(clazz.name),
      });
    });
  }
  update(id: number) {
    const clazz = this.clazzForm.value;
    this.clazzService.update(id, clazz).subscribe(() => {
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
  }
}
