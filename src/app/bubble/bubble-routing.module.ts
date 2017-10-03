import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { ParentComponent }    from './bubble.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ParentComponent }
  ])],
  exports: [RouterModule]
})
export class BubbleRoutingModule {}