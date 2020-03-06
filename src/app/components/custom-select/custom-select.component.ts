import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

interface selectOption {
  title: string;
  value: string
}

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

	@Input() options: selectOption[] = [];

  open: boolean = false;

  constructor() {
  }

  ngOnInit() {
    console.log(this.options)
  }

  optionSelect() {

  }

  writeValue(value) {
    if (!value || typeof value !== 'string') {
      return
    }
    const selectedEl = this.options.find(el => el.value === value);
    if (selectedEl) {
      this.selectedOption = selectedEl;
      this.onChange(this.selectedOption.value);
    }
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
