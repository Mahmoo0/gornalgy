import { Injectable } from '@angular/core';
import { Router } from  '@angular/router';
import { auth } from  'firebase/app';
import { AngularFireAuth } from  '@angular/fire/auth';
import { User } from  'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
   }

    get isLoggedIn(): boolean {
      const  user  =  JSON.parse(localStorage.getItem('user'));
      console.log(user);
      return  user  !==  null;
  }
  public static nameemail: string = null;
  user: User;
  async  login(email:  string, password:  string) {

    try {
        await  this.afAuth.auth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['tec']);
      AuthService.nameemail = email;
      console.log(AuthService.nameemail);

    } catch (e) {
        alert('Error!'  +  e.message);
    }
    }


}
