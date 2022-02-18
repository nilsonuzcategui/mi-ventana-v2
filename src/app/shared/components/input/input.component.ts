import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type InputType = 'email' | 'text' | 'password' | 'number';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true,
  }],
})
export class InputComponent {
  @Input() placeholder = '';
  @Input() type: InputType = 'text';

  private _inputValue: any;
  get inputValue(): any {
    return this._inputValue;
  }
  set inputValue(value: any) {
    if (value !== this._inputValue) {
      this._inputValue = value;
      this._onChangeCallback(value);
    }

    this._onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    this._inputValue = value;
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this._onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }

  private _onTouchedCallback = () => {};
  private _onChangeCallback = (_: any) => {};
}
