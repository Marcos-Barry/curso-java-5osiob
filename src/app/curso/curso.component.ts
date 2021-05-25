import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  
  cursos: Array<any>;
  curso: any;

  constructor(private service: ApiService) {}

  ngOnInit() {
    this.curso = {};
    this.service.listarcursos().subscribe(resposta => (this.cursos = resposta));
  }

  criarCurso(frm: FormGroup) {
    this.service.criarCurso(this.curso).subscribe(resposta => {
      this.cursos.push(resposta);

      frm.reset();
    });
  }
}
