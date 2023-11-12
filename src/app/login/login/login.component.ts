import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!:FormGroup;
  Token:any;
  constructor(private formbulder:FormBuilder ,private http:HttpClient ,private router:Router ){
  }
  ngOnInit(): void {
    this.form=this.formbulder.group({
      email:"",password:""
    })
  }
  login():Observable<any>{
    return this.http.post("https://localhost:7094/api/Auth",this.form.getRawValue());
  }

  submit()
  {
    this.login().subscribe((r)=>{
      //this.Token=r.toString;
    console.log(r.email);
    localStorage.setItem("token",r.token);
    localStorage.setItem("name",r.userName);

      this.router.navigate(["/products"])});
  }

}
