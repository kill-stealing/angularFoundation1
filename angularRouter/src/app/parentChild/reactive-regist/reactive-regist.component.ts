import { usernameValidator1 } from './../validators/validator1';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { equalValidator, usernameValidator, mobileValidator } from '../validators/validator1';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {
  formModel: FormGroup;
  // formModel: FormGroup = new FormGroup({
  //   username: new FormControl(),
  //   mobile: new FormControl(),
  //   passwordGroup: new FormGroup({
  //     password: new FormControl(),
  //     pconfirm: new FormControl(),
  //   })
  // });
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)],
        usernameValidator1],
      mobile1: ['', [Validators.minLength(6), mobileValidator]],
      passwordGroup: fb.group({
        password: ['', Validators.minLength(3)],
        pconfirm: ['', Validators.minLength(3)]
      }, { validator: equalValidator })
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    // console.log(this.formModel.get('mobile1').valid);
    // if (this.formModel.valid) {
    //   console.log(this.formModel.value);
    // }
  }

  // usernameValidator(formControl: FormControl): any {
  //   const valid: boolean = formControl.value === 'aaaaaa';
  //   return valid ? null : { username: true };
  // }

  // equalValidator(group: FormGroup): any {
  //   const password = group.get('password') as FormControl;
  //   const pconfirm = group.get('pconfirm') as FormControl;
  //   const valid: boolean = password.value === pconfirm.value;
  //   console.log('密码校验结果', valid);
  //   return valid ? null : { equal: true };
  // }

}
