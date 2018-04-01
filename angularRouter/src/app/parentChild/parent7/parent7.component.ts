import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-parent7',
  templateUrl: './parent7.component.html',
  styleUrls: ['./parent7.component.css']
})
export class Parent7Component implements OnInit {
  mobileValid = true;
  mobileUntouched = true;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(value: any) {
    console.log(value);
  }



  onMobileInput(form: NgForm) {
    if (form) {
      this.mobileValid = form.form.get('mobile').valid;
      this.mobileUntouched = form.form.get('mobile').untouched;
    }
  }
}
