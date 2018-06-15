///<reference path="../../../node_modules/@angular/material/core/typings/error/error-options.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    
  ]);
  matcher = new MyErrorStateMatcher();


  constructor() {
  }

  ngOnInit() {
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }


}

