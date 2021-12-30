import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from "./auth-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireAuthModule } from '@angular/fire/auth';
@NgModule({
    declarations:[
        LoginComponent, 
        RegisterComponent
    ],
    imports:[
        CommonModule, 
        AuthRoutingModule,
        ReactiveFormsModule,
        AngularFireAuthModule
    ],
    exports:[]
})

export class AuthModule{}
