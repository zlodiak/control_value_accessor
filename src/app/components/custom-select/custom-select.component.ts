import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";


@Component({
  selector: 'custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    }
  ]  
})
export class CustomSelectComponent implements OnInit {

  punkts = [
    'one',
    'two',
    'three',
    'four',
  ];

  option = null;

  ngOnInit() {
  }

  optionSelect(i) {
    this.option = i;
    this.onChange(i);
  }

  writeValue(value) {
    console.log('writeValue', value);
    this.option = value;
  }

  onChange: any = () => {
  };
  onTouched: any = () => {
  };

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }


}
