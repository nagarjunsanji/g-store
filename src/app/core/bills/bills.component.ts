import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Bill } from './bill';
import { BillsService } from 'src/app/services/bills/bills.service';
import { Router } from '@angular/router';

@Component({
  selector: 'gs-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'customerName', 'total', 'items', 'actions'];
  dataSource = new MatTableDataSource([]);
  bills:Bill[];
  constructor(public billsService:BillsService,public router:Router) { }

  ngOnInit() {
    this.loadBills();
  }


  loadBills(){
    this.billsService.getBillsSourceSubject().
    subscribe((billsResponse:Bill[]) => {
      this.bills = billsResponse;
      this.dataSource = new MatTableDataSource(billsResponse);
    }, (error) => {
    });
  }

  deleteBill(modifyingIndex){
    this.bills.splice(modifyingIndex, 1);
    this.billsService.setBills(this.bills);
  }

  editBill(modifyingIndex){
    this.router.navigate(["/bill",modifyingIndex]);
  }

}
