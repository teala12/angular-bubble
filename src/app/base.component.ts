import { Component, OnInit }      from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h2>BaseComponent {{title}}</h2>
  `,
})
export class BaseComponent implements OnInit {
  
  title: string;

  ngOnInit() {
    console.log("base");
    this.title = 'blabla';
  }
}