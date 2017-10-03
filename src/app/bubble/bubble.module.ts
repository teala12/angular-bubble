import { NgModule }         from '@angular/core';

import { BubbleRoutingModule } from './bubble-routing.module';
import { ParentComponent, MiddleComponent, ChildComponent }  from './bubble.component';

@NgModule({
  imports:      [ BubbleRoutingModule ],
  declarations: [ ParentComponent, 
  				  MiddleComponent, 
  				  ChildComponent
  				],
})
export class BubbleModule { }
