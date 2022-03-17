import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(
    private fg:FormBuilder, 
    private authService:AuthService, 
    private router:Router
    ){ }

  ngOnInit(): void {
      this.loginForm=this.fg.group({
        email: ['', [Validators.required, Validators.email] ],
        password: ['', Validators.required],

      })
  }
  login(){
    if(this.loginForm.invalid){ return; }  
    const {email, password}=this.loginForm.value;
    Swal.fire({
      title: 'loading',
      didOpen: ()=>{
        Swal.showLoading()
      }
    })
    this.authService.login(email, password)
    .then(credentials=>{
      Swal.close();
      this.router.navigate(['/']);
    })
    .catch(erro=>{
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: erro.message,
        footer: '<a href> Why do i have this issue?</a>'
      })
    })
  }

}
