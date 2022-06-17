import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaNoticias } from '../../Interfaces/noticias';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  ListaNoticias=ListaNoticias;
  id:number=0;
  Noticia:any;

  constructor(private ruta:ActivatedRoute) {
    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"];
    })
  }

  ngOnInit(): void {
    this.Noticia=ListaNoticias.find(objeto=>objeto.id==this.id);
  }
}
