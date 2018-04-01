import { Component, OnInit, DoCheck, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, OnChanges, DoCheck {
  @Input() greeting: string;
  @Input() user: { name: string };
  message = '初始化信息';
  oldUsername: string;
  changeDetected: boolean;
  ngChangeCount = 0;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }
  ngDoCheck(): void {
    if (this.oldUsername !== this.user.name) {
      this.changeDetected = true;
      console.log('DoCheck:user.name从' + this.oldUsername + '变为' + this.user.name);
      this.oldUsername = this.user.name;
    }
    if (this.changeDetected) {
      this.ngChangeCount = 0;
    } else {
      this.ngChangeCount = this.ngChangeCount + 1;
      console.log('DoCheck:user.name没变化时ngCheck方法已经被调用' + this.ngChangeCount + '次');
    }
    this.changeDetected = false;
  }
}
