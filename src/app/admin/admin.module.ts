import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { GetusersComponent } from './getusers/getusers.component';

console.warn("console loaded");
@NgModule({
  declarations: [
    AdminComponent,
    GetusersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
