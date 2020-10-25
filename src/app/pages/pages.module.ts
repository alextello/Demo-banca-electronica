import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UtilitiesModule } from '../utilities/utilities.module';
import { PagesRoutingModule } from './pages.routing';
import { CuentasComponent } from './cuentas/cuentas.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    CuentasComponent,
    AcercaDeComponent,
    ContactoComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    UtilitiesModule,
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [DashboardComponent],
})
export class PagesModule {}
