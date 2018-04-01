import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child7',
  templateUrl: './child7.component.html',
  styleUrls: ['./child7.component.css']
})
export class Child7Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('子组件child7销毁');
  }
}
