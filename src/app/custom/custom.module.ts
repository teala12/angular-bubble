import { NgModule }         from '@angular/core';

import { CustomRoutingModule } from './custom-routing.module';
import { ParentComponent, MiddleComponent, ChildComponent }  from './custom.component';

@NgModule({
  imports:      [ CustomRoutingModule ],
  declarations: [ ParentComponent, 
  				  MiddleComponent, 
  				  ChildComponent
  				],
})
export class CustomModule { }
