import { Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit, AfterViewInit, AfterViewChecked {
  ngAfterViewChecked(): void {
    console.log('子组件的视图变更检测完毕');
  }
  ngAfterViewInit(): void {
    console.log('子组件的视图初始化完毕');
  }

  greeting(message: string) {
    console.log(message);
  }

  constructor() { }

  ngOnInit() {
  }

}
