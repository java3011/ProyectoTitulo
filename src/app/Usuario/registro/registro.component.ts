import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  
  formula:FormGroup;
  errorRut = '';

  constructor(public fb: FormBuilder) { 
    this.formula = this.fb.group({
      nombre: new FormControl('',Validators.required),
      apellidopa: new FormControl('',Validators.required),
      apellidoma: new FormControl('',Validators.required),
      rut: new FormControl('',Validators.required)
    });

  }

  ngOnInit(): void {
  }

  async guardar(){
    const f = this.formula.value;
    const usuario = {
      nombre: f.nombre,
      apellidopa: f.apellidopa,
      apellidoma: f.apellidoma,
      rut: f.rut
    };
    localStorage.setItem('usuario',JSON.stringify(usuario));
    localStorage.setItem('Ingresado','true');
  }
}
