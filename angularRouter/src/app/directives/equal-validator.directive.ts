import { equalValidator } from './../parentChild/validators/validator1';
import { NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appEqualValidator]',
  providers: [{ provide: NG_VALIDATORS, useValue: equalValidator, multi: true }]
})
export class EqualValidatorDirective {

  constructor() { }

}
