import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListasObjetosService {
data:string[] =[
"php",
"cobol",
"java",
"c#",
"c",
"c++"


];



constructor() { }

getData(){

  return this.data;

}


}
