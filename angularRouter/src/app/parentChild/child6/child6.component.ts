import { Component, OnInit, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child6',
  templateUrl: './child6.component.html',
  styleUrls: ['./child6.component.css']
})
export class Child6Component implements OnInit, AfterContentInit, AfterContentChecked, OnDestroy {
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentChecked(): void {
    console.log('子组件中投影内容变更检测完毕');
  }
  ngAfterContentInit(): void {
    console.log('子组件中投影内容初始化完毕');
  }

  ngOnDestroy(): void {
    console.log('子组件child6销毁');
  }
}
