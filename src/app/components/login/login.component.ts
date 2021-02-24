import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  user:User = new User();

  loginForm: FormGroup = undefined;

  message: string = undefined; 

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(this.user.email,[Validators.required]),
      password: new FormControl(this.user.password,[Validators.required])
    });
  }

  get email(){
    return this.loginForm.get("email").value.trim();
  }

  get password(){
    return this.loginForm.get("password").value.trim()
  }

  login(){
    this.user.email = this.email;
    this.user.password = this.password;
    this.userService.login(this.user).then((result) => {
      this.guardarToken(result.token);
      this.router.navigateByUrl("/list");
    }).catch((err) => {
      this.message = "No pudo realizarse la consulta " + err.statusText;
    });
  }

  guardarToken(token:string){
    sessionStorage.setItem("token",token);
  }
}
