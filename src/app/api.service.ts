import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
  id: number;
  nome: string;
  area: string;
  aulas: string;
}

@Injectable()
export class ApiService {
  cursosUrl = 'afternoon-ocean-97191.herokuapp.com/curso';

  constructor(private http: HttpClient) {}

  currentResponse: Response;
  updateList: Array<Response> = [];

  listar() {
    this.http
      .get<Response>('https://afternoon-ocean-97191.herokuapp.com/curso')
      .subscribe(data => {
        if (!this.currentResponse) {
          this.updateList.push(data);
        }
        this.updateList.push(data);
        this.currentResponse = data;
      });
  }

  listarcursos() {
    return this.http.get<Array<any>>(this.cursosUrl);
  }

  criarCurso(curso: any) {
    return this.http.post(this.cursosUrl, curso);
  }
}
