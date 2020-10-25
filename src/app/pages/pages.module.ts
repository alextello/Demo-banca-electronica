import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UtilitiesModule } from '../utilities/utilities.module';
import { PagesRoutingModule } from './pages.routing';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    UtilitiesModule,
    SharedModule,
    PagesRoutingModule,
  ],
  exports: [DashboardComponent],
})
export class PagesModule {}
