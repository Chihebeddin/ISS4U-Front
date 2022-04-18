import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  //aFormGroup!: FormGroup ;
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  num;
  errorMessage = '';

 // siteKey!: string;
  constructor(private authService: AuthService, private formBuilder: FormBuilder) { 
   
  }

  ngOnInit(): void {
    /* this.aFormGroup = this.formBuilder.group({
       recaptcha: ['', Validators.required]
     });*/
    // this.siteKey= "6LfeoWAcAAAAAEfWBDGYaclpPQ5DQYghCOItEaod";
  }
  //siteKey: string ="6Lf1l7oeAAAAABWgOXJ5O_m4FMsUCfPvnqWzSUuK";
 
 

  // public findName(){
  //   this.authService.findName().subscribe(
  //     (response)=>{
  //       this.num=response;
  //     }
  //   )
  // }
  
  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
