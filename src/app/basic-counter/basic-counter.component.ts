import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-counter',
  templateUrl: './basic-counter.component.html',
  styleUrls: ['./basic-counter.component.scss']
})
export class BasicCounterComponent implements OnInit {

  count: number;

  constructor() { }

  ngOnInit() {
    this.count = 0;
  }

  incrementCount(): void {
    if (this.count < 99) {
      ++this.count;
    }
  }

  decrementCount(): void {
    if (this.count > 0) {
    --this.count;
    }
  }
}
