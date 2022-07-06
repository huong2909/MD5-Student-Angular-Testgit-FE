import { Component, OnInit } from '@angular/core';
import {Clazz} from '../../model/Clazz';
import {ClazzService} from '../../service/clazz.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-clazz-list',
  templateUrl: './clazz-list.component.html',
  styleUrls: ['./clazz-list.component.css']
})
export class ClazzListComponent implements OnInit {
  clazz: Clazz[] = [];
  id: number;
  constructor(private  clazzService: ClazzService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.clazzService.getAll().subscribe(result => {
      // @ts-ignore
      this.clazz = result;
    }, error => {
      console.log(error);
    });
  }

  delete(id: string) {
    this.clazzService.delete(id).subscribe(() => {
      // this.router.navigate(['/clazz']);
      this.getAll();
      alert('Xoá thành công');
    }, e => {
      console.log(e);
    });
  }
}
