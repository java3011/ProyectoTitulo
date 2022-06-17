import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.scss']
})
export class IniciosesionComponent implements OnInit {

  formu: FormGroup;
  lo=0;

  constructor(public fb: FormBuilder) {
    this.formu = this.fb.group({
      rut: new FormControl('',Validators.required),
    });
  }

  ngOnInit(): void {
  }
  
  async ingresar(){
    const f = this.formu.value;
    const usuario = JSON.parse('usuario');
    if(usuario.rut === f.rut){
      console.log('Ingresar');
      localStorage.setItem('Ingresado','true');
    }
  }
}
