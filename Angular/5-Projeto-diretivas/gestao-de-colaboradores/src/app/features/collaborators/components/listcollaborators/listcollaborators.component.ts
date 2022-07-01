import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listcollaborators',
  templateUrl: './listcollaborators.component.html',
  styleUrls: ['./listcollaborators.component.scss']
})
export class ListcollaboratorsComponent implements OnInit {
  
  titulo = "Listagem de colaboradores";

  id: number = 7;
  name: string = "Nathan Carlos Exercicio";
  wage: number = 4500;
  office: string = "Dev IP";

  constructor() { }

  ngOnInit(): void {
  }
  
}


