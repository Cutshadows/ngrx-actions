import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.models';
// import * as firebase from 'firebase';
import  {AngularFireAuth} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public authServices:AngularFireAuth) {
   }

   crearUsuarios(usuario:Usuario){
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

   logOut(){
     this.authServices.signOut(); 
   }
}
