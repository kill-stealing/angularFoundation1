import { Child4Component } from './../child4/child4.component';
import { Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('child1')
  child1: Child4Component;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.child1.greeting('hello');
    }, 5000);
  }
  ngAfterViewChecked(): void {
    console.log('父组件的视图变更检测完毕');
  }
  ngAfterViewInit(): void {
    console.log('父组件的视图初始化完毕');
  }


}
