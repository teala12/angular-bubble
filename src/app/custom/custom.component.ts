import { Component, OnInit, Output, EventEmitter }      from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div>
      <h2>ParentComponent {{clicked}}</h2>
      <middle (whenClicked)="onClick()" (childClicked)="onClick()"></middle>
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
      <child (whenClicked)="onClick()" (childClicked)="onChildClick()"></child>
    </div>
  `,
})
export class MiddleComponent {
  clicked: number;

  @Output() whenClicked = new EventEmitter()

  ngOnInit() {
    this.clicked = 0;
  } 
  onClick() {
    this.clicked ++;
    this.whenClicked.emit();
  }

  onChildClick() {
    this.clicked ++;
  }
}

@Component({
  selector: 'child',
  template: `
    <div>
      <h2>ChildComponent {{clicked}}</h2>
      <button (click)="onClick()">Click me</button>
    </div>
  `,
})
export class ChildComponent {
  clicked: number;

  @Output() whenClicked = new EventEmitter()
  @Output() childClicked = new EventEmitter()

  ngOnInit() {
    this.clicked = 0;
  }
  onClick() {
    this.clicked ++;
    this.whenClicked.emit();
    this.childClicked.emit();
  } 
}
