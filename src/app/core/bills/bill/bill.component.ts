import { Component, OnInit } from '@angular/core';
import { BillsService } from '../../../services/bills/bills.service';
import { Bill, Item } from '../bill';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'gs-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

  bill = new Bill();
  item = new Item();

  displayedColumns: string[] = ['id', 'name', 'weight', 'price', 'total', 'actions'];
  dataSource = new MatTableDataSource([]);

  constructor(public billsService: BillsService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loadRouterParm();
  }

  loadRouterParm() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (params.id) {
          this.getBill(params.id);
        }
      }
    );
  }

  getBill(id) {

    this.billsService.getBillById(id).subscribe((billResponse: Bill) => {
      console.log(billResponse);
      this.bill = billResponse;
      this.dataSource = new MatTableDataSource(this.bill.items);
    }, (error) => {
    });

  }
  addItem() {
    this.item.total = this.item.weight * this.item.price;
    this.bill.items.push(this.item);

    this.updateTotal();

    this.item = new Item();

    this.dataSource = new MatTableDataSource(this.bill.items);
  }

  addBill() {
    this.billsService.setBill(this.bill);
  }

  deleteItem(modifyingIndex) {
    this.bill.items.splice(modifyingIndex, 1);
    this.updateTotal();
    this.dataSource = new MatTableDataSource(this.bill.items);
  }

  updateTotal() {
    this.bill.total = 0;
    for (const item of this.bill.items) {
      this.bill.total = this.bill.total + item.total;
    }
  }

}
