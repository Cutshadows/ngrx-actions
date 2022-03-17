import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioDto } from '../models/usuario.models';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    // Swal.fire({
    //   title: 'Loading',
    //   didOpen: ()=>{Swal.showLoading();}
    // })
    const {nombre, correo, password}=this.registroForm.value;

    this.authService.crearUsuarios(new UsuarioDto(nombre, correo, password))
      .then(
        credenciales=>{
        // Swal.close();
          this.route.navigate(['/dashboard'])
        }
      ).catch(erro=>{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: erro.message,
          footer: '<a href> Why do i have this issue?</a>'
        })
      })
  }

}
