import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Clazz} from '../model/Clazz';
const API_URL = 'http://localhost:8081/api/classes';
@Injectable({
  providedIn: 'root'
})
export class ClazzService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Clazz[]> {
    return this.httpClient.get<Clazz[]>(API_URL);
  }
  save(clazz): Observable<Clazz> {
    return this.httpClient.post<Clazz>(API_URL, clazz);
  }
  getById(id): Observable<Clazz> {
    return  this.httpClient.get<Clazz>(API_URL + `/${id}`);
  }
  delete(id: string): Observable<Clazz> {
    return this.httpClient.delete<Clazz>(API_URL + `/${id}`);
  }
  update(id: number, clazz: Clazz): Observable<Clazz> {
    return this.httpClient.put<Clazz>(`${API_URL}/${id}`, clazz);
  }
}
