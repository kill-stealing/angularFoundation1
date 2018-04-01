import { Component, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-parent5',
  templateUrl: './parent5.component.html',
  styleUrls: ['./parent5.component.css']
})
export class Parent5Component implements OnInit, AfterViewInit, AfterContentInit, AfterContentChecked {
  divContent = '<div>慕课网</div>';
  message: string;
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentChecked(): void {
    console.log('父组件中投影内容变更检测完毕');
  }
  ngAfterContentInit(): void {
    console.log('父组件中投影内容初始化完毕');
    this.message = 'hello';
  }

  ngAfterViewInit(): void {
    console.log('父组件中视图初始化完毕');
  }
}
