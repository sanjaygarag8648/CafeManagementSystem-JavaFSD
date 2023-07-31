import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'SpringFood-app';

  static total:number;

  static modelUser: User ={
    username:'',
    password:'',
    email:'',
    phone:'',
    firstname:'',
    lastname:'',
    address:'',
    merchant:null
  };

}
export interface User{
  username:string;
  password:string;
  firstname:string;
  lastname:string;
  email:string;
  address:string;
  phone:string;
  merchant:boolean;
}

