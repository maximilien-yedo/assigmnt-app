import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { user } from './user.model';
import { loginUser } from './login.model ';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userId!:String
  username!:string
  users :user [] =[
    {
      email: "max@gmail.fr",
      username : "izangi",
      mdp:"azerty",
      admin:false

    },
     {
      email: "max@yahoo.fr",
      username : "payne",
      mdp:"azerty",
      admin:true
    },
  ];
  userSub = new Subject<user[]>();

  logUser:loginUser[] =[]
  loginSub = new Subject<loginUser[]>();
  admin = new BehaviorSubject<boolean>(false);
  loggedIn = new BehaviorSubject<boolean>(false);
  userInfo = new BehaviorSubject<any>(null);
  userInfosub = new Subject<loginUser[]>();
  verifLoggedIn:any=null;

  constructor(private router : Router) {
    this.initlog();
   }
  initlog(){
    if(typeof localStorage !== undefined){
      this.verifLoggedIn = localStorage.getItem('value')
      if (this.verifLoggedIn) {
        console.log(this.verifLoggedIn);
        this.loggedIn = new BehaviorSubject<boolean>(true);
      }
    }
  }


  emitUsers():void{
    this.userSub.next(this.users)
  }
  emitLogUser():void{
    this.loginSub.next(this.logUser)
  }
  addUser(user:user) :void {
    this.users.unshift(user);
    this.emitUsers();
  }
  login(logUser : loginUser){
    this.logUser.push(logUser);
    this.emitLogUser();
    var taille = this.users.length

    for (let index = 0; index <taille ; index++) {
      console.log(this.users[index]);

      if(this.logUser[0].email==this.users[index].email ){
        this.userInfo.next(this.users[index])
        this.loggedIn.next(true);
        if(typeof localStorage !== undefined){
          var authData = {
            ramdonId : Math.floor(Math.random()*Math.floor(1000)).toString(),
            username: this.users[index].username
          }
          localStorage.setItem('value',JSON.stringify(authData));
        }
        if (this.admin.value !== this.users[index].admin) {
          this.admin.next(true);
        }
        return this.router.navigate(['home']);
      }

    }
    return this.router.navigate(['login']);
  }

  logout(){
    this.logUser.pop()
    this.loggedIn.next(false);
    this.admin.next(false);
    this.verifLoggedIn = null
    localStorage.removeItem('value');
    localStorage.clear();
    console.log(this.logUser);


  }
  islogged() {
    const isUserAdmin =  new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });

    return isUserAdmin;
    // return this.loggedIn;
  }
  isAdmin() {
    const isUsersAdmin =  new Promise((resolve, reject) => {
      resolve(this.admin);
    });

    return isUsersAdmin;
    // return this.loggedIn;
  }
}
