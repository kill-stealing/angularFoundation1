import { Child3Component } from './../child3/child3.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  @ViewChild('child1') child1: Child3Component;

  constructor() { }

  ngOnInit() {
  }

  callChild() {
    this.child1.log('hello');
  }
}
