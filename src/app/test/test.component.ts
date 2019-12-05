import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>
  Hee Angular..this is the testing mood...</div>`,
  styles: [`
  div
  {
    color: green;
  }`]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
