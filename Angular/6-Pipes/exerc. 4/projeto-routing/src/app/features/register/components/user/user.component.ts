import { Component, OnInit } from '@angular/core';
import { Alunos } from '../../models/user.models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  alunos: Array<Alunos> = [
    { id: 1, nome: 'Nathan Carlos', valorMensalidade: 100, dataUltimoPgto: '2021-07-23', dataInclusaoSistema: '2021-07-01' },
    { id: 2, nome: 'Alan Jhonnes', valorMensalidade: 100, dataUltimoPgto: '2021-07-15', dataInclusaoSistema: '2021-03-10' },
    { id: 3, nome: 'Adrino Silva', valorMensalidade: 100, dataUltimoPgto: '2021-07-09', dataInclusaoSistema: '2021-04-26' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
