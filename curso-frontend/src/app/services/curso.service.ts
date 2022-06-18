import { Curso } from './../models/curso';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) {
  }

  pesquisar() : Observable<Curso[]>{
    return this.http.get<Curso[]>('http://localhost:8080/curso');
  }

}
