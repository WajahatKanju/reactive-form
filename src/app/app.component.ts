import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Form01Component} from "./form01/form01.component";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-root' ,
  standalone: true ,
  imports: [ReactiveFormsModule , CommonModule , RouterOutlet , Form01Component] ,
  templateUrl: './app.component.html' ,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reactive1_0';
}
