import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	public signUpForm: FormGroup = null;
	
  public contactTypes = [
    {title: 'tphone', value: 'vPhone'},
    {title: 'te-mail', value: 'vE-mail'},
    {title: 'tskype', value: 'vSkype'}
  ];	

  public get contacts() {
    return <FormArray>this.signUpForm.get('contacts');
  }  

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      user_name: [''],
      contacts: this.fb.array([])
    });

    this.contactTypes.forEach(item => {
      (<FormArray>this.signUpForm.get('contacts')).push(
        this.fb.group({
          title: [item.title],
          value: ['item.value']
        })
      );
    });

    console.log(this.signUpForm);  
  }

}
