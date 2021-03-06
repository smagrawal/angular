import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { User } from '../User';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  private genderList: string[];
  signupForm: FormGroup;

  private user:User

  constructor(private fb:FormBuilder) { }


  ngOnInit() {
    this.genderList = ['Male','Female','Others'];

     // Use the formbuilder to build the Form model
     this.signupForm  = this.fb.group({
			email: ['',[Validators.required,
						Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
			password: this.fb.group({
				pwd: ['', [Validators.required, 
						   Validators.minLength(3)]],
				confirmPwd: ['', [Validators.required,
								  Validators.minLength(3)]]
			}),
			gender: ['', Validators.required],
			terms: ['', Validators.requiredTrue]
		})
  
   }

  get email() { return this.signupForm.get('email'); }
     
    get password() { return this.signupForm.get('password'); }
 
    get gender() { return this.signupForm.get('gender'); }
 
    get terms() { return this.signupForm.get('terms'); }

    public onFormSubmit() {
      if(this.signupForm.valid) {
          this.user = this.signupForm.value;
          console.log(this.user);
          /* Any API call logic via services goes here */
      }
  }

}
