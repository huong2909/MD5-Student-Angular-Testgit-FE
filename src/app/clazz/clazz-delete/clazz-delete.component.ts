import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ClazzService} from '../../service/clazz.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-clazz-delete',
  templateUrl: './clazz-delete.component.html',
  styleUrls: ['./clazz-delete.component.css']
})
export class ClazzDeleteComponent implements OnInit {
  clazzForm: FormGroup;
  id: number;
  constructor(private clazzService: ClazzService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getClazz(this.id);
    });
  }

  ngOnInit() {
  }
  getClazz(id: number) {
    return this.clazzService.getById(id).subscribe(student => {
      this.clazzForm = new FormGroup({
        name: new FormControl(student.name),
      });
    });
  }
  delete(id: string) {
    this.clazzService.delete(id).subscribe(() => {
      // this.router.navigate(['/clazz']);
      alert('Xoá thành công');
    }, e => {
      console.log(e);
    });
  }
}
