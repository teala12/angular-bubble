import { Component, OnInit, Output, EventEmitter }      from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div>
      <h2>ParentComponent {{clicked}}</h2>
      <middle (click)="onClick()"></middle>
    </div>  
  `,
})
export class ParentComponent implements OnInit {
  
  title: string;
  clicked: number;

  ngOnInit() {
    console.log("ParentComponent");
    this.title = 'blabla';
    this.clicked = 0;
  }

  onClick() {
    this.clicked ++;
  }
}

@Component({
  selector: 'middle',
  template: `
    <div>
      <h2>MiddleComponent {{clicked}}</h2>
      <child (click)="onClick()"></child>
    </div>
  `,
})
export class MiddleComponent {
  clicked: number;
  @Output() click = new EventEmitter()

  ngOnInit() {
    this.clicked = 0;
  } 
  onClick() {
    this.clicked ++;
    this.click.emit();
  }
}

@Component({
  selector: 'child',
  template: `
    <div>
      <h2>ChildComponent {{clicked}}</h2>
      <button (click)="onClick($event)">Click me</button>
    </div>
  `,
})
export class ChildComponent {
  clicked: number;
  @Output() click = new EventEmitter()

  ngOnInit() {
    this.clicked = 0;
  }
  onClick(e) {
    //if(e) e.stopPropagation();
    this.clicked ++;
    this.click.emit();
  } 
}