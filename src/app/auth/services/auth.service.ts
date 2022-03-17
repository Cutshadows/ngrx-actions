import { Injectable } from '@angular/core';
import { UsuarioDto } from '../models/usuario.models';
import * as firebase from 'firebase';
import  {AngularFireAuth} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public authServices:AngularFireAuth) {
   }

   crearUsuarios(usuario:UsuarioDto){
    usuario.getNombre;
    usuario.getCorreo;
    usuario.getPassword;
    console.log(usuario.getCorreo, usuario.getPassword)
    return this.authServices.createUserWithEmailAndPassword(usuario.getCorreo, usuario.getPassword);
    //  firebase.auth().createUserWithEmailAndPassword(usuario.getCorreo, usuario.getPassword)
    //   .then((userCredencial)=>{
    //     console.log(userCredencial)
    //   }).catch(console.log)
   }
   login(email:string, password:string){
      return this.authServices.signInWithEmailAndPassword(email, password);
   }
   logOut(){
     this.authServices.signOut(); 
   }
}
