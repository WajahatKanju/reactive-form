import {Component , OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl , FormGroup , ReactiveFormsModule , Validators} from "@angular/forms";

@Component({
  selector: 'app-form01' ,
  standalone: true ,
  imports: [CommonModule , ReactiveFormsModule] ,
  templateUrl: './form01.component.html' ,
  styleUrl: './form01.component.scss'
})
export class Form01Component implements OnInit {
  reactiveForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null , [Validators.required, Validators.minLength(3)],) ,
      lastName: new FormControl('Doe' , Validators.required ,) ,
      email: new FormControl('jondoe@example.com' , [Validators.required , Validators.email ,]) ,
      username: new FormControl('jon.doe' , Validators.required ,) ,
      dob: new FormControl('2000-01-01' , Validators.required ,) ,
      gender: new FormControl('male' , Validators.required ,) ,
      street: new FormControl('123 @ Street' , Validators.required ,) ,
      country: new FormControl('Pakistan' , Validators.required ,) ,
      city: new FormControl('Islamabad' , Validators.required ,) ,
      region: new FormControl('Punjab' , Validators.required ,) ,
      postal: new FormControl('123456' , Validators.required ,) ,
    })
  }

  FormSubmitted() {
    console.log(this.reactiveForm)
  }
}
