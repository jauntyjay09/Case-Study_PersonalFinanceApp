import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import {BuddyComponent} from './buddy/buddy.component';
import {BillsComponent} from './bills/bills.component';
import { FundsComponent } from './funds/funds.component';
import { AuthGuard } from '../shared/auth.guard';

const routes: Routes = [
  {path:'buddy',component:BuddyComponent,canActivate :[AuthGuard]},
  {path: 'bills',component:BillsComponent,canActivate :[AuthGuard]},
  {path: 'funds',component:FundsComponent,canActivate :[AuthGuard]},
  { path: '', component: UsersComponent,canActivate :[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
