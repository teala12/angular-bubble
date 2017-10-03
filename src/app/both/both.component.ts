import { Component, OnInit, Input, Output, EventEmitter }      from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

@Component({
  selector: 'app-parent',
  template: `
    <div>
      <h2>ParentComponent {{clicked}}</h2>
      <middle (click)="onClick()" [stop]="stop"></middle>
    </div>  
  `,
})
export class ParentComponent implements OnInit {
  
  title: string;
  clicked: number;
  stop: string;

  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {
    console.log("ParentComponent");
    this.title = 'blabla';
    this.clicked = 0;
    this.stop = this.route.snapshot.paramMap.get('stop');
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
      <child (click)="onClick()" [stop]="stop"></child>
    </div>
  `,
})
export class MiddleComponent {
  clicked: number;
  @Input() stop: string;
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
      <h2>ChildComponent {{clicked}} {{stop}}</h2>
      <button (click)="onClick($event)">Click me</button>
    </div>
  `,
})
export class ChildComponent {
  clicked: number;
  @Output() click = new EventEmitter()
  @Input() stop: string;

  ngOnInit() {
    this.clicked = 0;
  }
  onClick(e) {
    if(e && this.stop) e.stopPropagation();
    this.clicked ++;
    this.click.emit();
  } 
}