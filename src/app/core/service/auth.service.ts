import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Observable} from "rxjs";
import firebase from "firebase/compat";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: Observable<firebase.User | null>

  constructor(private auth : AngularFireAuth) {
    this.userData = auth.authState;
  }

  login(email : string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password);
  }


}
