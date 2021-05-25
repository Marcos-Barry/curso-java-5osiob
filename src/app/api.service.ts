import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  currentResponse: Response;
  updateList: Array<Response> = [];

  listar(): Observable<Response[]> {
    return this.http
      .get<Response[]>('https://afternoon-ocean-97191.herokuapp.com/curso')
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  listarcursos() {
    return this.http.get<Array<any>>(this.cursosUrl);
  }

  criarCurso(curso: any) {
    return this.http.post(this.cursosUrl, curso);
  }
}
