import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './base.component';

export const routes: Routes = [
  { path: '', component: BaseComponent, pathMatch: 'full'},
  { path: 'bubble', loadChildren: 'app/bubble/bubble.module#BubbleModule' },
  { path: 'custom', loadChildren: 'app/custom/custom.module#CustomModule' },
  { path: 'both', loadChildren: 'app/both/both.module#BothModule' },
  //{ path: 'stop', loadChildren: 'app/stop/hero.module#HeroModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}