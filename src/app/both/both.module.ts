import { NgModule }         from '@angular/core';

import { BothRoutingModule } from './both-routing.module';
import { ParentComponent, MiddleComponent, ChildComponent }  from './both.component';

@NgModule({
  imports:      [ BothRoutingModule ],
  declarations: [ ParentComponent, 
  				  MiddleComponent, 
  				  ChildComponent
  				],
})
export class BothModule { }
