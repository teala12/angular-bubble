import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { ParentComponent }    from './both.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ParentComponent }
  ])],
  exports: [RouterModule]
})
export class BothRoutingModule {}