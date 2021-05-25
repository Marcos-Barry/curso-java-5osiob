import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

cursosUrl = 'afternoon-ocean-97191.herokuapp.com/curso';

  constructor(private http: HttpClient) {}

  listarcursos(){
    return this.http.get<Array<any>>(this.cursosUrl);
  }

  criarCurso(curso : any){
    return this.http.post(this.cursosUrl, curso);
  }
}
