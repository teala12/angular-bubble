import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { ParentComponent }    from './both.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', pathMatch: 'full', component: ParentComponent },
    { path: ':stop', component: ParentComponent }
  ])],
  exports: [RouterModule]
})
export class BothRoutingModule {}