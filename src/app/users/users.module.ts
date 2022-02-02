import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { BuddyComponent } from './buddy/buddy.component';
import { BillsComponent } from './bills/bills.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FundsComponent } from './funds/funds.component';


@NgModule({
  declarations: [
    UsersComponent,
    BuddyComponent,
    BillsComponent,
    FundsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class UsersModule { }
