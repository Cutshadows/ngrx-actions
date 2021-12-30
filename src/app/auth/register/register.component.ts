import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario.models';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  registroForm:FormGroup;
  constructor( 
    private fb:FormBuilder, 
    private route:Router, 
    private authService:AuthService) { }

  ngOnInit(): void {
    this.registroForm=this.fb.group(
      {
        nombre: ['' ,Validators.required],
        correo: ['' ,[Validators.required, Validators.email]],
        password: ['' ,Validators.required]
      }
    )
  }
  crearUsuario(){
    if(this.registroForm.invalid){return;}

    console.log(this.registroForm)
    console.log(this.registroForm.valid)
    console.log(this.registroForm.value)
    const {nombre, correo, password}=this.registroForm.value;
    this.authService.crearUsuarios(new Usuario(nombre, correo, password))
      .then(
        credenciales=>{
          console.log(credenciales)
          this.route.navigate(['/dashboard'])
        }
      ).catch(
        error=>console.log(error)
      )
  }

}
