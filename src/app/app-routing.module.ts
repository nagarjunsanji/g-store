import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillsComponent } from './core/bills/bills.component';
import { BillComponent } from './core/bills/bill/bill.component';

const routes: Routes = [
  {
    path: 'bills',
    component: BillsComponent
  },
  {
    path: 'bill',
    component: BillComponent
  },
  {
    path: 'bill/:id',
    component: BillComponent
  },
  { path: '**', redirectTo: 'bills' }
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
