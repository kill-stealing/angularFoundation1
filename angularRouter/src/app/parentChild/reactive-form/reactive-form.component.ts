import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  formModel: FormGroup = new FormGroup({
    username: new FormControl(),
    rangeDate: new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    }),
    emailArr: new FormArray([
      new FormControl('a@a.com'),
      new FormControl('b@b.com')
    ])
  });

  constructor() { }

  ngOnInit() {
  }

  addEmail() {
    const emailArr: FormArray = this.formModel.get('emailArr') as FormArray;
    emailArr.push(new FormControl(''));
  }

  onSubmit() {
    console.log(this.formModel);
    console.log(JSON.stringify(this.formModel.value));
  }

}
