import {Component , OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormArray , FormControl , FormGroup , ReactiveFormsModule , Validators} from "@angular/forms";
import {animate , query , stagger , state , style , transition , trigger} from "@angular/animations";

@Component({
  selector: 'app-form01' ,
  standalone: true ,
  imports: [CommonModule , ReactiveFormsModule] ,
  animations: [
    trigger('InputAnimation', [
        state('void', style({opacity: 0, transform: 'translateX(-100%)'})),
        transition('void <=> *', [animate(100)])
    ])
  ],
  templateUrl: './form01.component.html' ,
  styleUrl: './form01.component.scss'
})
export class Form01Component implements OnInit {
  reactiveForm: FormGroup = new FormGroup({});
  protected readonly length = length;

  get skillsFormArray(): FormArray {
    return this.reactiveForm.get('skills') as FormArray;
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null , [Validators.required , Validators.minLength(3)] ,) ,
      lastName: new FormControl(null , Validators.required ,) ,
      email: new FormControl(null , [Validators.required , Validators.email ,]) ,
      username: new FormControl(null , Validators.required ,) ,
      dob: new FormControl(null ,) ,
      gender: new FormControl(null , Validators.required ,) ,
      address: new FormGroup({

        street: new FormControl(null , Validators.required ,) ,
        country: new FormControl(null , Validators.required ,) ,
        city: new FormControl(null ,) ,
        region: new FormControl(null ,) ,
        postal: new FormControl(null , Validators.required ,) ,
      }) ,
      skills: new FormArray([
        new FormControl(null , Validators.required ,) ,

      ])
    })
  }

  AddSkills():void {
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl())
  }

  removeSkills(index:number):void
  {
    (<FormArray>this.reactiveForm.get('skills')).removeAt(index)
  }

  FormSubmitted() {
    console.log(this.reactiveForm)
  }

}
