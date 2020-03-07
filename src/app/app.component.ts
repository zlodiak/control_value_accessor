import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
        "name": ["Tom"],
        "option": [2],
    });
            
    console.log(this.myForm);

    this.myForm.get('option').valueChanges.subscribe(data => {
      console.log('in app component changed option', data);
    });

    this.myForm.get('name').valueChanges.subscribe(data => {
      console.log('in app component changed name', data);
    });    
  }

}
