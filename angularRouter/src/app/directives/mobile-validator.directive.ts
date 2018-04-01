import { mobileValidator } from './../parentChild/validators/validator1';
import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appMobileValidator]',
  providers: [{ provide: NG_VALIDATORS, useValue: mobileValidator, multi: true }]
})
export class MobileValidatorDirective {

  constructor() { }

}
