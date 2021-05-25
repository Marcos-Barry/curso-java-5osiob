import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

export interface Curso {
  id: number;
  nome: string;
  area: string;
  aulas: string;
}

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  curso = {} as Curso;
  cursos: Curso[];

  constructor(public ApiService: ApiService) {}

  ngOnInit() {
    this.ApiService.listar();
  }

  getCursos(){
    this.ApiService.listar().subscribe((cursos:Curso[]) =>{
      this.cursos = cursos;
    })
  }
}
