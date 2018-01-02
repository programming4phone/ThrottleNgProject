/**
 * New typescript file
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SplashPageComponent } from './splash-page/splash-page.component';
import { ChangeUsageComponent } from './change-usage/change-usage.component';
import { QueryUsageComponent } from './query-usage/query-usage.component';
import { TierAdminComponent } from './tier-admin/tier-admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SplashPageComponent },
  { path: 'changeusage', component: ChangeUsageComponent },
  { path: 'queryusage', component: QueryUsageComponent },
  { path: 'tieradmin', component: TierAdminComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
