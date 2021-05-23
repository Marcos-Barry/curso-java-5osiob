import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CursoComponent } from './curso/curso.component';
import { AlunoComponent } from './aluno/aluno.component';
import { ProfessorComponent } from './professor/professor.component';
import { CursosComponent } from './cursos/cursos.component';
import { AlunosComponent } from './alunos/alunos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { SobreComponent } from './sobre/sobre.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'curso', component: CursoComponent },
      { path: 'professor', component: ProfessorComponent },
      { path: 'aluno', component: AlunoComponent },
      { path: 'professores', component: ProfessoresComponent },
      { path: 'cursos', component: CursosComponent },
      { path: 'alunos', component: AlunosComponent },
      { path: 'sobre', component: SobreComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    NavbarComponent,
    CursoComponent,
    AlunoComponent,
    ProfessorComponent,
    CursosComponent,
    AlunosComponent,
    ProfessoresComponent,
    SobreComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
