 import { Component } from '@angular/core';
 import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
  
  @Component({
    selector: 'app-form-shema',
    templateUrl: './form-shema.component.html',
    styleUrls: ['./form-shema.component.css']
  })
  export class FormShemaComponent {
    title = 'Angular Form Реактивні форми';
     angForm: FormGroup;
     constructor(private fb: FormBuilder) {
      this.createForm();
    }
     createForm() {
      this.angForm = this.fb.group({
         name: ['', Validators.required ]
      });
    }
  }