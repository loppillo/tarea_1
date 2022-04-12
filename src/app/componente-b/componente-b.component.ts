import { ListasObjetosService } from './../services/listasObjetos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {
  
  listas:string[]=[];

  constructor(private dataService:ListasObjetosService) { }

  ngOnInit(): void {
    this.setUp()
  }

  setUp():any{
    
      this.listas = this.dataService.getData();
      console.log("Lista de lenguajes de programación:",this.listas);


  }

}
